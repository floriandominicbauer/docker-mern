# pulling node image
FROM node

# creating workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install runner & modules
#RUN npm install -g nodemon --quiet
#RUN npm install

# setup the app
ENV PORT=4000
ENV DATABASE=mongodb://mongodb/DATABASE

RUN npm install

# start the app
EXPOSE 4000

CMD ["npm", "start"]