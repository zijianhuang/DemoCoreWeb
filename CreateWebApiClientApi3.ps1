cd $PSScriptRoot
#Make sure CodeGen.json is saved in format ANSI or UTF-8 without BOM, since ASP.NET Core 2.0 Web API will fail to deserialize POST Body that contains BOM.
$path = "$PSScriptRoot/Core3WebApi"
$procArgs = @{
    FilePath         = "$path/bin/Debug/net10.0/Core3WebApi.exe"
    WorkingDirectory = $path
    PassThru         = $true
}
$process = Start-Process @procArgs

#Step 2: Run CodeGen
$client = [System.Net.Http.HttpClient]::new()

# Prepare request
$request = [System.Net.Http.HttpRequestMessage]::new([System.Net.Http.HttpMethod]::Post, 'http://localhost:5000/api/codegen')

$jsonBody = Get-Content "$PSScriptRoot/Core3Webapi/CodeGen.json" -Raw
$request.Content = [System.Net.Http.StringContent]::new($jsonBody, [System.Text.Encoding]::UTF8, 'application/json')

try {
    $response = $client.SendAsync($request).Result
    $responseBody = $response.Content.ReadAsStringAsync().Result

    if ($response.IsSuccessStatusCode) {
        $result = $responseBody
        Write-Output $result
    }
    else {
        Write-Output "Status Code: $($response.StatusCode.value__)"
        Write-Output "Response Body:"
        Write-Output $responseBody
    }
}
catch {
    Write-Output "Request failed: $($_.Exception.Message)"
}
finally {
    $client.Dispose()
}

Stop-Process $process