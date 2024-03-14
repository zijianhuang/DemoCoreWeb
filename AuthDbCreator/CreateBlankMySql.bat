# Create Sqlite DB for Core3WebApi
cd %~dp0
set "connectionString=server=localhost;port=3306;Uid=root; password=zzzzzzzz; database=DemoAppAuth_Test; Persist Security Info=True;Allow User Variables=true"
set roleNamesCsv=admin,manager,staff,user,api

bin\Debug\net8.0\AuthDbCreator.exe Fonlow.EntityFrameworkCore.MySql "%connectionString%"