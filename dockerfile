# HOW TO RUN
# docker build -t test-ga-app .
# docker run -p 3000:3000 test-ga-app

# Use the official Node.js image.
# Choose a version that matches the one used in your CI configuration.
FROM node:22

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Build the project.
RUN npm run build

# Expose the port on which your app runs.
EXPOSE 3000

# Define the command to run the app.
CMD [ "npm", "start" ]
