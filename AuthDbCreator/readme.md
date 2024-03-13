This program creates an auth database, initialize some basic users, add API user, and remove user.

When running "AuthDbCreator.exe filePath", it will create Sqlite database.
Without arguments, this will create a database according to connection string in appsettings.json.

Just run "CreateBlankSqlite.bat" for setting up auth.db for the Web service PoetryApp.


Connection strings:
```
"IdentityConnection": "server=localhost;port=3306;Uid=root; password=zzzzzzzz; database=DemoAppAuth_Test; Persist Security Info=True;Allow User Variables=true",

```