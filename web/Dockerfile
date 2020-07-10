FROM node:14.5.0-alpine as client
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . .
RUN yarn build
FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d
COPY --from=client /app/build /var/www/html
CMD ["nginx", "-g", "daemon off;"]