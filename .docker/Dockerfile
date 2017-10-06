# specify the node base image with your desired version node:<version>
FROM node:8.6-stretch

EXPOSE 8080

# entrypoint
COPY ./entrypoint.sh /sbin/entrypoint.sh
RUN chmod +x /sbin/entrypoint.sh
ENTRYPOINT ["/sbin/entrypoint.sh"]

