FROM node:20.3.1-alpine
WORKDIR /usr/app
COPY . .
RUN npm ci --only=production --omit=dev
RUN npm run build

CMD [ "npm", "start" ]