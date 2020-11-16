FROM node:13-alpinesasdasdasd

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD node ./bin/www
