FROM node:16-alpine as app_backend_database
WORKDIR /backend/
COPY package*.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]
#  ...