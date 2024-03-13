# Create Sqlite DB for Core3WebApi
cd %~dp0
set dbEngine=sqlite
set "connectionString=Data Source=..\Core3WebApi\DemoApp_Data\auth.db"
set roleNamesCsv=admin,manager,staff,user,api

bin\Debug\net8.0\AuthDbCreator.exe %dbEngine% "%connectionString%" %roleNamesCsv%