# Base Image is NodeJS image
FROM node:16

# Create work directory if it does not exist
WORKDIR /app

# Copy package dependencies file to work directory
COPY package.json /app

# Install app dependencies. 
RUN npm install 

# Copy all additional required files to work directory
COPY . /app

EXPOSE 4000

#Execute app.js
CMD ["node","app.js"]
