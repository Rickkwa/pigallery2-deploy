# pigallery2-deploy
Deployment configs for https://github.com/bpatrik/pigallery2


## Running it

Workspace setup:

```shell
WORKDIR=/app
git clone git@github.com:Rickkwa/pigallery2-deploy.git "${WORKDIR}"
mkdir -p ${WORKDIR}/_userdata/{images,tmp,config}
chown -R 9999:9999 "${WORKDIR}/_userdata/config/" "${WORKDIR}/_userdata/tmp/"  # Needs read/write
chmod a+r "${WORKDIR}/_userdata/images/"  # Needs read only

cp "${WORKDIR}/pigallery/config.json" "${WORKDIR}/_userdata/config/config.json"
chown 9999:9999 "${WORKDIR}/_userdata/config/config.json"
```

Then follow these steps:

1. Start containers up with `docker compose up -d`.
1. If you want to have prometheus/grafana running, do `docker compose -f docker-compose.yml -f docker-compose.monitoring.yml up -d`.
1. Start uploading photos to `${WORKDIR}/_userdata/images/`
