# Build frontend
FROM node:22-alpine AS frontend-build
WORKDIR /src/cv-frontend

COPY cv-frontend/package*.json ./
RUN npm ci

COPY cv-frontend/ ./
RUN npm run build


# Build backend
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS backend-build
WORKDIR /src

COPY cv-backend/cv-backend.csproj cv-backend/
RUN dotnet restore cv-backend/cv-backend.csproj

COPY cv-backend/ cv-backend/
COPY --from=frontend-build /src/cv-frontend/dist/ cv-backend/wwwroot/

RUN dotnet publish cv-backend/cv-backend.csproj -c Release -o /app/publish --no-restore


# Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

COPY --from=backend-build /app/publish ./

ENV ASPNETCORE_URLS=http://0.0.0.0:5110
EXPOSE 5110

ENTRYPOINT ["dotnet", "cv-backend.dll"]