# Cloudflare Tunnel deployment

This project is intended to run as a static frontend in production:

- React is built by Vite
- images and the CV PDF live under `cv-frontend/public/images`
- Docker serves the built frontend through nginx on port `5110`
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

Build the static frontend:

```powershell
.\scripts\Publish-FrontendToBackend.ps1
```

Build and run the Docker container:

```powershell
docker compose up --build -d
```

## Raspberry Pi later

On the Pi, run the same Docker Compose setup:

```powershell
docker compose up --build -d
```

Then configure:

- one Docker Compose service for the static nginx site
- one systemd service for `cloudflared`
- the same tunnel public hostname: `mariuskristensen.no -> http://localhost:5110`
