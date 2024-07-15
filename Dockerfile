FROM node:20.15.1-alpine

WORKDIR /usr/app/rest

COPY ./package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]