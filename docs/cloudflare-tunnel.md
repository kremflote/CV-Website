# Cloudflare Tunnel deployment

This project is intended to run as one ASP.NET Core app in production:

- React is built into `cv-backend/wwwroot`
- API routes stay under `/api`
- images and the CV PDF stay under `cv-backend/wwwroot/images`
- Cloudflare Tunnel points `mariuskristensen.no` to `http://localhost:5110`

## Local PC setup

Install and log in:

```powershell
winget install --id Cloudflare.cloudflared
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel login
```

Create the tunnel:

```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel create mariuskristensen-cv
```

Route the domain:

```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel route dns mariuskristensen-cv mariuskristensen.no
```

Create `%USERPROFILE%\.cloudflared\config.yml`:

```yaml
tunnel: mariuskristensen-cv
credentials-file: C:\Users\flyin\.cloudflared\<TUNNEL_ID>.json

ingress:
  - hostname: mariuskristensen.no
    service: http://localhost:5110
  - service: http_status:404
```

Run the tunnel:

```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" tunnel run mariuskristensen-cv
```

Install as a Windows service when the tunnel works:

```powershell
& "C:\Program Files (x86)\cloudflared\cloudflared.exe" service install
```

## Build and run the site

Build the frontend into the backend and publish:

```powershell
.\scripts\Publish-FrontendToBackend.ps1
```

Run the backend locally:

```powershell
cd .\cv-backend
dotnet run --launch-profile http
```

## Raspberry Pi later

On the Pi, publish for Linux ARM64 from a development machine:

```powershell
dotnet publish .\cv-backend\cv-backend.csproj -c Release -r linux-arm64 --self-contained false
```

Then copy the publish folder to the Pi and configure:

- one systemd service for the ASP.NET app
- one systemd service for `cloudflared`
- the same tunnel public hostname: `mariuskristensen.no -> http://localhost:5110`
