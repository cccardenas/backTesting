FROM node:latest

# directorio
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install pm2 -g
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

RUN ls -al -R


COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]