Set-Location $PSScriptRoot
ng build --configuration=production --localize
copy-item .\OnBoardingIndex.html -Destination '../ngdist/prod/browser/index.html'
Write-Output 'done'