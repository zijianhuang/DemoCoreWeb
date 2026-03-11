Set-Location $PSScriptRoot
$prod="dev"
ng build --configuration=$prod

copy-item "./src/conf/" -Destination "../ngdist/$prod/browser/conf/" -Force -Recurse
$apiBaseUri='http://localhost:5000/'
$siteConfigTemplate= Get-Content './src/conf_template/siteconfigTemplate.js' -Raw
$updatedContent=$siteConfigTemplate -replace '\$apiBaseUri', $apiBaseUri
Set-Content -Path "../ngdist/$prod/browser/conf/siteconfig.js" -Value $updatedContent

Write-Output "apiBaseUri $apiBaseUri"
Write-Output "done $(Get-Date)"