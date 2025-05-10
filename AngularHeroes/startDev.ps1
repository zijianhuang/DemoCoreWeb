#Run prod build with dotnet hosting
cd $PSScriptRoot
dotnet-serve -d ../ngdist/dev/browser -p 5200
