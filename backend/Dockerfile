FROM node:21.5.0
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD ["npm", "start"]