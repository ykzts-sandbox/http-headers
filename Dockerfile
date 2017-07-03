FROM node:6.11.0-alpine

WORKDIR /app

COPY ./package.json /app/
RUN yarn

COPY . /app/

EXPOSE 8080
CMD ["yarn", "start"]
