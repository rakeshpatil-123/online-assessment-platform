# Use official Node.js LTS image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "app.js"]
