FROM node:14.5.0-alpine
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]