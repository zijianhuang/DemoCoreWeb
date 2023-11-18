::Build for testing with dotnet hosting
::set %current%=%~dp0

dotnet-serve -d ..\ngdist\dev -p 5200
