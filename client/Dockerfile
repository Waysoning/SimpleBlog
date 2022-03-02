# Specify a base image
FROM node:16-alpine

# Add the following line 
ENV CI=true

WORKDIR /app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD ["npm", "start"]