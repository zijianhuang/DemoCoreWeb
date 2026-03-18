#Run `npm run build` for prod build first. https://create-react-app.dev/docs/production-build 
#Launch local Web API
#Then use in Web browser
Set-Location $PSScriptRoot
dotnet-serve -d ./build -p 5400
