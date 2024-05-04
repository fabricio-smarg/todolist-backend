FROM node:21.5.0
WORKDIR /src
COPY . .
RUN yarn install --production
EXPOSE 3333
CMD ["node", "src/server.js"]