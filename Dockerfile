# Base Image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build the app
RUN yarn build

# Start the server in production mode
CMD [ "yarn", "start:prod" ]
