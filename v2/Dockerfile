FROM node:16-alpine

#create folder and enter the folder
WORKDIR /202530Anaversary

#copy local folder to docker
# COPY app  ./app
COPY express ./express
COPY app/build ./express/build

# change enterpoint & npm install & npm start
WORKDIR /202530Anaversary/express
RUN npm install
EXPOSE 5001
CMD ["npm","run","start"]
