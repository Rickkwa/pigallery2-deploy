FROM openresty/openresty:1.21.4.1-7-centos7

RUN opm get knyar/nginx-lua-prometheus=0.20221218 && \
    groupadd --gid 9999 appuser && \
    useradd --uid 9999 --gid 9999 -m appuser && \
    chown -R appuser:appuser /usr/local/openresty/nginx/

USER appuser
