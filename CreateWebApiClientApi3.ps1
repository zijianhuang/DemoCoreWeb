cd $PSScriptRoot
#Make sure CodeGen.json is saved in format ANSI or UTF-8 without BOM, since ASP.NET Core 2.0 Web API will fail to deserialize POST Body that contains BOM.
$path = "$PSScriptRoot/Core3WebApi"
$procArgs = @{
    FilePath         = "$path/bin/Debug/net9.0/Core3WebApi.exe"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

#Step 2: Run CodeGen
$restArgs = @{
    Uri         = 'http://localhost:5000/api/codegen'
    Method      = 'Post'
    InFile      = "$PSScriptRoot/Core3Webapi/CodeGen.json"
    ContentType = 'application/json'
}
try {
        $result = Invoke-RestMethod @restArgs
        Write-Output $result
}
catch {
        Write-Output $_.Exception.Response.StatusCode
        $response = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($response)
        $reader.BaseStream.Position = 0
        $reader.DiscardBufferedData()
        $responseBody = $reader.ReadToEnd()
        Write-Output  $responseBody
}


Stop-Process $process