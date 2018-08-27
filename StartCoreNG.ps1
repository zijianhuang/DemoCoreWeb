#Launch WebApi Website and POST a request for generating client APIs
cd $PSScriptRoot
$path = "$PSScriptRoot\CoreNG\bin\Debug\netcoreapp2.1"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "$path\CoreNG.dll"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

Invoke-RestMethod http://localhost:5000/api/values -Method GET

