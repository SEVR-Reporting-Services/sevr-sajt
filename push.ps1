# Städar editor-rester och pushar alla ändringar till GitHub (live på ~1 min).
# Körs via push.bat (dubbelklick). Kör inte denna direkt.
Set-Location $PSScriptRoot
$enc = New-Object System.Text.UTF8Encoding($false)

Write-Host "1/3  Stadar editor-rester i HTML-filerna..." -ForegroundColor Cyan
Get-ChildItem -Path $PSScriptRoot -Filter *.html | ForEach-Object {
  $p = $_.FullName
  $c = [IO.File]::ReadAllText($p)
  $orig = $c
  $c = $c -replace ' class=""', ''            # tomma class-attribut
  $c = $c -replace ' class="reveal in"', ''   # inbakade reveal-klasser (fristaende)
  $c = $c -replace ' reveal in"', '"'         # inbakade reveal-klasser (kombinerade)
  if ($c -ne $orig) {
    [IO.File]::WriteAllText($p, $c, $enc)
    Write-Host "     stadat: $($_.Name)" -ForegroundColor DarkGray
  }
}

Write-Host "2/3  Letar efter andringar..." -ForegroundColor Cyan
git add -A
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
  Write-Host ""
  Write-Host "Inget nytt att pusha - allt ar redan uppe." -ForegroundColor Yellow
  return
}

$msg = "Uppdatera copy via editor ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
git commit -m $msg | Out-Null

Write-Host "3/3  Pushar till GitHub..." -ForegroundColor Cyan
git push
if ($LASTEXITCODE -eq 0) {
  Write-Host ""
  Write-Host "KLART! Live pa ca 1 minut:" -ForegroundColor Green
  Write-Host "https://sevr-reporting-services.github.io/sevr-sajt/" -ForegroundColor Green
} else {
  Write-Host ""
  Write-Host "Pushen misslyckades. Kontrollera internet/inloggning och forsok igen." -ForegroundColor Red
}
