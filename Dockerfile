FROM node:10.15.1

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm ci

ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.0/dumb-init_1.2.0_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
RUN npm run build
ENTRYPOINT ["dumb-init", "--"]

EXPOSE 3001

CMD ["npm", "run", "start:prod"]
