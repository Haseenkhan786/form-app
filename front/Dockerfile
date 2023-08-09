
FROM node:16 

WORKDIR /frontend

COPY package*.json ./
COPY package-lock.json ./

RUN npm install -g @angular/cli 

COPY . .
RUN ng build --configuration
CMD ["ng", "serve", "--host", "0.0.0.0"]
