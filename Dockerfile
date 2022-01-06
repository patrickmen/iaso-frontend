FROM nginx

WORKDIR /usr/src/iaso-frontend/

COPY ./dist  /usr/share/nginx/html/

EXPOSE 9000

CMD ["nginx", "-g", "daemon off;"]
