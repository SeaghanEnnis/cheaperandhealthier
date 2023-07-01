#docker build -t apple-angular-test .
#docker run --name apple-angular-test -d -p 8888:80 apple-angular-test
#localhost:8888

FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/cheaperandhealthier /usr/share/nginx/html