# Use the official, lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the docker container
WORKDIR /usr/src/app

# Copy the package.json so that we can install dependencies
COPY package*.json ./

# Install the dependencies (like express)
RUN npm install --omit=dev

# Copy the rest of your application code
COPY . .

# Expose port 3000 to the host network
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
