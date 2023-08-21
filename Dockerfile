FROM node:18

RUN mkdir /adn-backend

WORKDIR /adn-backend

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]