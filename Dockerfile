FROM node:18-alpine

WORKDIR /usr/src/api

COPY . .
COPY ./.env.devlopment ./.env
COPY ./db/initial.sql /docker-entrypoint-initdb.d/

RUN npm install --quiet --no-optional --no-fund --loglevel=error
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:dev"]