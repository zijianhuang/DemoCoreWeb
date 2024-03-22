This program creates an auth database, initialize with some roles and start-up users.

## Commands

### Without Arguments

The program expect a connection string like:
```json
	"ConnectionStrings": {
		"IdentityConnection": "Data Source=c:\\temp\\demoAuth.db"
	},
```

### With Arguments

"AuthDbCreator.exe PluginAssemblyName connectionString"

Examples:

[CreateBlankSqlite.bat](CreateBlankSqlite.bat)
```
AuthDbCreator.exe Fonlow.EntityFrameworkCore.MySql "server=localhost;port=3306;Uid=root; password=zzzzzzzz; database=DemoAppAuth_Test; Persist Security Info=True;Allow User Variables=true"
```
or
[CreateBlankMySql.bat](CreateBlankMySql.bat)
```
AuthDbCreator.exe Fonlow.EntityFrameworkCore.MySql "Data Source=..\Core3WebApi\DemoApp_Data\auth.db"
```

## Seeding

When creating the DB, the program can optionally seed the DB with some initial data.

The program expects such optional settings:
```json
	"IdentitySeeding": {
		"Roles": [ "admin", "manager", "staff", "user", "api" ],
		"Users": [
			{
				"Username": "admin",
				"FullName": "John Smith",
				"Email": "admin@somewhere.com",
				"Role": "admin",
				"Password": "Pppppp*8"
			}
		]
	}
```


**Hints:**

* This program is basically a shell program of "Fonlow.AuthDbCreator.dll", it should be easy to write a PowerShell script to do the same things and extend.
* In some real world scenarios, you may want to deploy multiple instances of ASP.NET applications for business clients, you may use either this program or PowerShell scripts calling "Fonlow.AuthDbCreator.dll" in your CD pipeline.
* In some scenarios you may want to maintain the auth DB during daily operations without GUI, this program (or respective PS scripts) could be easily extended for adding or removing users and resetting password etc.
