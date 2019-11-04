cd $PSScriptRoot
#Make sure CodeGen.json is saved in format ANSI or UTF-8 without BOM, since ASP.NET Core 2.0 Web API will fail to deserialize POST Body that contains BOM.
$path = "$PSScriptRoot\CoreWebApi3\bin\Debug\netcoreapp3.0"
$procArgs = @{
    FilePath         = "dotnet.exe"
    ArgumentList     = "$path\CoreWebApi3.dll"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

$restArgs = @{
    Uri         = 'http://localhost:5000/api/codegen'
    Method      = 'Post'
    InFile      = "$PSScriptRoot\CoreWebApi\CodeGen.json"
    ContentType = 'application/json'
}
Invoke-RestMethod @restArgs

#Step 3: Compile generated TS codes to JS if App is coded in JS.
$procTscArgs = @{
    FilePath         = "node"
    ArgumentList     = "`"C:\Program Files (x86)\Microsoft SDKs\TypeScript\3.2\tsc.js`" $PSScriptRoot\axios\src\clientapi\WebApiCoreAxiosClientAuto.ts -d"
    PassThru         = $true
    
}
$processTsc = Start-Process @procTscArgs

Stop-Process $process