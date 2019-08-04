FROM node:10.16

WORKDIR /server
COPY . /server
RUN npm install
RUN npm run build

EXPOSE 2700
CMD [ "node", "dist/main.js" ]
