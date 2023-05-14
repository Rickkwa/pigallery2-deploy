FROM openresty/openresty:1.21.4.1-7-centos7

RUN opm get knyar/nginx-lua-prometheus=0.20221218 && \
    groupadd --gid 9999 appuser && \
    useradd --uid 9999 --gid 9999 -m appuser && \
    yum install -y telnet cronie logrotate && \
    rm -f /etc/cron.daily/logrotate && \
    chown -R appuser:appuser /usr/local/openresty/nginx/ && \
    mkdir -p /app/logs/ /app/cron.d/ /app/logrotate.d/ && \
    chown 9999:9999 /app/logs /app/cron.d /app/logrotate.d && \
    chmod 755 /app/logs

COPY --chown=9999:9999 entrypoint.sh /app/entrypoint.sh
COPY --chown=9999:9999 nginx-rotate.conf /app/logrotate.d/nginx-rotate.conf
COPY --chown=9999:9999 nginx-rotate.cron /app/cron.d/nginx-rotate.cron

RUN chmod a+x /app/entrypoint.sh && \
    chown 9999:9999 /var/run /var/lib/logrotate && \
    chmod gu+s /usr/sbin/crond

USER appuser

ENTRYPOINT /app/entrypoint.sh
