# imagens dorckers 
FROM node

WORKDIR /usr/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]