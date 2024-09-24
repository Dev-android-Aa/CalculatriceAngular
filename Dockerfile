#first stage of buliding angular image
FROM node:alpine3.14 AS build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/

RUN npm install 


COPY . /app 
RUN npm run build --prod

#finl stage
FROM nginx:alpine
COPY --from=build /app/dist/calculatorProject /usr/share/nginx/html


