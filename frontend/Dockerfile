FROM node:16-alpine as app_frontend_compaixao
WORKDIR /frontend/
COPY package*.json ./
RUN npm install
COPY . ./
CMD ["npm", "start"]
#  ...