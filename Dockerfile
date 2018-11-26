FROM nginx:1.15-alpine

LABEL maintainer="fehguy"

ENV VERSION "v2.2.10"
ENV FOLDER "swagger-ui-2.2.10"
ENV API_URL ""
ENV API_U ""
ENV API_KEY "**None**"
ENV OAUTH_CLIENT_ID "**None**"
ENV OAUTH_CLIENT_SECRET "**None**"
ENV OAUTH_REALM "**None**"
ENV OAUTH_APP_NAME "**None**"
ENV OAUTH_ADDITIONAL_PARAMS "**None**"
ENV SWAGGER_JSON "/app/swagger.json"
ENV PORT 8080
ENV BASE_URL ""
ENV VALIDATOR_URL "null"

COPY nginx.conf /etc/nginx/

# copy swagger files to the `/js` folder
COPY ./dist/* /usr/share/nginx/html/swagdocs/
COPY ./dist/* /usr/share/nginx/html/swagdocs/swagdocs/
COPY ./docker-run.sh /usr/share/nginx/

EXPOSE 8080

CMD ["sh", "/usr/share/nginx/docker-run.sh"]
