FROM node:14.17.0-alpine3.11

RUN apk update && apk add curl

RUN mkdir /home/node/app
COPY . /home/node/app
WORKDIR /home/node/app
RUN yarn
RUN chmod +x start.sh

ENTRYPOINT ["./start.sh"]