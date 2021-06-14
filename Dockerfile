FROM node:14

WORKDIR /app

COPY . /app

RUN npm install --global webpack

RUN npm install --global webpack-cli

RUN npm install

EXPOSE 8082

CMD npm run dev