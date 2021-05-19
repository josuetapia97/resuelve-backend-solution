
FROM python:3.7-buster

# instalamos el nginx
RUN apt-get update && apt-get install nginx vim -y --no-install-recommends
COPY nginx.default /etc/nginx/sites-available/default
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

# copiamos los recursos e instalamos las dependencias
RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/pip_cache
RUN mkdir -p /opt/app/jugadores
COPY requirements.txt /opt/app/
COPY start-server.sh /opt/app/
COPY jugadores /opt/app/jugadores/
WORKDIR /opt/app
RUN pip install -r requirements.txt --cache-dir /opt/app/pip_cache
RUN chown -R www-data:www-data /opt/app
RUN ["chmod", "+x", "/opt/app/start-server.sh"]

# corremos el server
EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["/opt/app/start-server.sh"]
