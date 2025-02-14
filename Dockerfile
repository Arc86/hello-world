# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure the public directory is copied
COPY public ./public

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run the app
CMD ["node", "app.js"]
