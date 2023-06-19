FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the production-ready assets
RUN npm run build

# Serve the assets using a static file server
CMD ["npm", "run", "serve"]