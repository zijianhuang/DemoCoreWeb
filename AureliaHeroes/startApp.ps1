#Run `npm run build` for prod build first
#Launch local Web API
#Then use in Web browser
Set-Location $PSScriptRoot
dotnet-serve -d dist\ -p 5300
