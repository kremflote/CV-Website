$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$frontendPath = Join-Path $repoRoot "cv-frontend"
$frontendDistPath = Join-Path $frontendPath "dist"

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

Write-Host "Static frontend build ready at: $frontendDistPath"
