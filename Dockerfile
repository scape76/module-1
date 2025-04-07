FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm i -g pnpm

RUN pnpm i

COPY . .

RUN pnpm build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/www /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
