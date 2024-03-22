# Create Sqlite DB for Core3WebApi
cd %~dp0
set "connectionString=Data Source=..\Core3WebApi\DemoApp_Data\auth.db"

bin\Debug\net8.0\AuthDbCreator.exe Fonlow.EntityFrameworkCore.Sqlite "%connectionString%"