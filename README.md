# pigallery2-deploy
Deployment configs for https://github.com/bpatrik/pigallery2


## Running it

Workspace setup:

```shell
WORKDIR=/app
git clone git@github.com:Rickkwa/pigallery2-deploy.git "${WORKDIR}"
mkdir -p "${WORKDIR}/pigallery2/images" "${WORKDIR}/pigallery2/tmp" "${WORKDIR}/pigallery2/config"
```

Then follow these steps:

1. Docker compose up to do first time initialization.
1. Create a new admin user and delete the `admin` user.
1. Then stop the containers.
1. Apply config.json according to the one in this repo.
1. Start containers up again.
1. Start uploading photos to `$WORKDIR/pigallery2/images/`
