::Build for testing with dotnet hosting
::set %current%=%~dp0

dotnet-serve -d ..\ngdist\prod -p 5200
