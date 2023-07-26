FROM node:20.3.1-alpine as dependencies
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production

FROM node:20.3.1-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build


FROM node:20.3.1-alpine as runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD [ "npm", "start" ]