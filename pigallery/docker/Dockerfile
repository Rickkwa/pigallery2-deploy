FROM bpatrik/pigallery2:1.9.5

RUN groupadd --gid 9999 appuser && \
    useradd --uid 9999 --gid 9999 -m appuser && \
    chown -R appuser:appuser /app

USER appuser
