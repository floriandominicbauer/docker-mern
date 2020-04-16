# pulling node image
FROM node

# creating workspace
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install modules
RUN npm install

# start the app
EXPOSE 3000
CMD ["npm", "start"]