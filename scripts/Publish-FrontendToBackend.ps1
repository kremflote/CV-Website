param(
    [string]$Configuration = "Release"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$frontendPath = Join-Path $repoRoot "cv-frontend"
$backendPath = Join-Path $repoRoot "cv-backend"
$frontendDistPath = Join-Path $frontendPath "dist"
$backendWwwrootPath = Join-Path $backendPath "wwwroot"

Push-Location $frontendPath
try {
    npm run build
}
finally {
    Pop-Location
}

if (-not (Test-Path -LiteralPath $frontendDistPath)) {
    throw "Frontend build output was not found: $frontendDistPath"
}

New-Item -ItemType Directory -Force -Path $backendWwwrootPath | Out-Null

Get-ChildItem -LiteralPath $backendWwwrootPath -Force |
    Where-Object { $_.Name -ne "images" } |
    Remove-Item -Recurse -Force

Copy-Item -Path (Join-Path $frontendDistPath "*") -Destination $backendWwwrootPath -Recurse -Force

Push-Location $backendPath
try {
    dotnet publish -c $Configuration
}
finally {
    Pop-Location
}
