FROM node:22-alpine AS frontend-build
WORKDIR /src/cv-frontend

COPY cv-frontend/package*.json ./
RUN npm ci

COPY cv-frontend/ ./
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /src/cv-frontend/dist/ /usr/share/nginx/html/

EXPOSE 5110
