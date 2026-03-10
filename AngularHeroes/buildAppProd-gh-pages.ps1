# Backend endpoint is defined in siteconfigProd.js
Set-Location $PSScriptRoot
$prod="DemoCoreWeb"
ng build --configuration=production --output-path="../ngdist/$prod/" --base-href=/$prod/angular/
Write-Output "done $(Get-Date)"