FROM node:20.4-alpine3.17

COPY bot-webapp bot-webapp
COPY dev-full.crt ./bot-webapp/dev-full.crt
COPY dev-key.key ./bot-webapp/dev-key.key

RUN npm install -g serve http-server
RUN cd bot-webapp && npm i && npm run build

WORKDIR /bot-webapp/build
CMD ["http-server", "--proxy", "https://bot-dev-domain.com:1445/index.html?", "--cors", "-S", "-C", "../dev-full.crt", "-K", "../dev-key.key", "-p", "1445"]