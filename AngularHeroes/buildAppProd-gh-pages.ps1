# Backend endpoint is defined in siteconfigProd.js
Set-Location $PSScriptRoot
$prod="webapiclientgen"
ng build --configuration=production --output-path="../ngdist/$prod/" --base-href=/$prod/
Write-Output "done $(Get-Date)"