# develop stage
FROM node:20.11.1-alpine
WORKDIR /code
RUN apk add --no-cache git
RUN apk add --no-cache yarn
RUN apk add --no-cache tmux
RUN yarn global add @quasar/cli
