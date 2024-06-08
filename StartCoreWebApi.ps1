#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot\Core3WebApi"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "run --project $path/Core3WebApi.csproj --no-build"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

Invoke-RestMethod http://localhost:5000/api/DateTypes/GetDateTimeOffset -Method GET
Invoke-RestMethod http://localhost:5000/api/DateTypes/GetDateOnly -Method GET

