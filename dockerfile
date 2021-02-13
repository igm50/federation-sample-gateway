FROM node:15.8-alpine3.10

COPY ./package.json /usr/src/app/package.json
COPY ./package-lock.json /usr/src/app/package-lock.json

WORKDIR /usr/src/app

RUN npm install

CMD npm start
