#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot\Core3WebApi"
$procArgs = @{
    FilePath         = "$path/bin/Debug/net9.0/Core3WebApi.exe"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

Invoke-RestMethod http://localhost:5000/api/DateTypes/ForDateTimeOffset -Method GET
Invoke-RestMethod http://localhost:5000/api/DateTypes/GetDateOnlyMin -Method GET
Invoke-RestMethod http://localhost:5000/WeatherForecast -Method GET

