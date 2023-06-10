# pigallery2-deploy
Deployment configs for https://github.com/bpatrik/pigallery2


## Running it

Workspace setup:

```shell
WORKDIR=/app
git clone git@github.com:Rickkwa/pigallery2-deploy.git "${WORKDIR}"
mkdir -p ${WORKDIR}/_userdata/{images,tmp,config,ssl}

# Use custom config
cp "${WORKDIR}/pigallery/config.json" "${WORKDIR}/_userdata/config/config.json"

# Set up self signed cert
openssl genrsa -out "${WORKDIR}/_userdata/ssl/private.key" 4096
openssl req -new -key "${WORKDIR}/_userdata/ssl/private.key" -out "${WORKDIR}/_userdata/ssl/certificate.csr"
openssl x509 -req -days 3650 -in "${WORKDIR}/_userdata/ssl/certificate.csr" -signkey "${WORKDIR}/_userdata/ssl/private.key" -out "${WORKDIR}/_userdata/ssl/certificate.crt"

# Configure permissions
chown -R 9999:9999 "${WORKDIR}/_userdata/config/" "${WORKDIR}/_userdata/tmp/"  # Needs read/write
chmod a+r "${WORKDIR}/_userdata/images/"  # Needs read only
chown -R 9999:9999 "${WORKDIR}/_userdata/ssl/"
```

Then follow these steps:

1. Start containers up with `docker compose up -d`.
1. If you want to have prometheus/grafana running, do `docker compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d`.
1. Start uploading photos to `${WORKDIR}/_userdata/images/`

## Grafana Access

Grafana is set to listen on localhost. So for external access, you can create a tunnel so that your local computer's `http://localhost:80` will access the server's `http://localhost:3000`, where Grafana is listening.
Similarly can be done for the Prometheus dashboard.

```shell
ssh -L 80:localhost:3000 -L 9090:localhost:9090 <user>@<server>
```
