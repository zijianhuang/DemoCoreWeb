cd $PSScriptRoot
#The Web API Website hosted in IIS Express or IIS or whatever Web server should already be running
#Make sure CodeGen.json is saved in format ANSI or UTF-8 without BOM, since ASP.NET Core 2.0 Web API will fail to deserialize POST Body that contains BOM.
Invoke-RestMethod http://localhost:49528/api/codegen -Method POST -InFile "$($PSScriptRoot)\CoreNG\CodeGen.json" -ContentType "application/json"

