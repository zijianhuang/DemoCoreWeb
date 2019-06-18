cd $PSScriptRoot
#Make sure CodeGen.json is saved in format ANSI or UTF-8 without BOM, since ASP.NET Core 2.0 Web API will fail to deserialize POST Body that contains BOM.
$path = "$PSScriptRoot\CoreMvc\bin\Debug\netcoreapp2.2"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "$path\CoreMvc.dll"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

#Step 2: Run CodeGen
$restArgs = @{
    Uri         = 'http://localhost:5000/api/codegen'
    Method      = 'Post'
    InFile      = "$PSScriptRoot\CoreMvc\CodeGen.json"
    ContentType = 'application/json'
}
Invoke-RestMethod @restArgs

#Step 3: Compile generated TS codes to JS
$procTscArgs = @{
    FilePath         = "C:\Program Files (x86)\Microsoft SDKs\TypeScript\2.6\tsc.exe"
    ArgumentList     = "$PSScriptRoot\CoreMvc\Scripts\ClientApi\WebApiClientAuto.ts"
    PassThru         = $false
}
$processTsc = Start-Process @procTscArgs

Stop-Process $process

