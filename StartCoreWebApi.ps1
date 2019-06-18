#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot\CoreWebApi\bin\Debug\netcoreapp2.2"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "$path\CoreWebApi.dll"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

Invoke-RestMethod http://localhost:5000/api/values -Method GET

