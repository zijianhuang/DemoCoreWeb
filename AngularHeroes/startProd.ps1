#Run prod build with dotnet hosting
cd $PSScriptRoot
dotnet-serve -d ../ngdist/prod/browser/ -p 5200
