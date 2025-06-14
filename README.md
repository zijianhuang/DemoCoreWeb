[Strongly Typed Client API Generators](https://github.com/zijianhuang/webapiclientgen) generate strongly typed client API in C# codes and TypeScript codes. This repository contains code examples explained in the following CodeProject.com articles:

* [Generate C# Client API for ASP.NET Core Web API](https://www.codeproject.com/Articles/1243908/Generate-Csharp-Client-API-for-ASP-NET-Core-Web-AP) / [Local Copy](Docs/Generate%20C#%20Client%20API%20for%20ASP.NET%20Core%20Web%20API%20-%20CodeProject.html)



**Remarks:** 

* .NET Core 2.x had dependency on Newtonsoft.JSON, while .NET Core 3.0 had been decoupled from Neewtonsoft.JSON and the default serializer is working well in most scenarios except for Tuple, 2D array and anonymous object etc. If you would support these data types or would keep 100% compitability with the serialization of NewtonSoft.JSON, you should explicitly include package `Microsoft.AspNetCore.Mvc.NewtonsoftJson` and add add `AddNewtonsoftJson()` in `Startup.cs`.


And this repository contains the demo applications.

## Server demo

1. Core3WebApi, ASP.NET Core Web API providing data to other test suites.
1. Core3Mvc, ASP.NET Core MVC.

## Client Demo
1. Tour of the Heroes with MAUI, migrated from Xamarin Heroes, in folder mobile.
1. Tour of the Heroes with Aurelia in folder AureliaHeroes. Integration test suite included.
1. Tour of the Heroes with React TS in folder ReactHeroes.  Integration test suite included.
1. vueTS, JEST test suite with Vue TypeScript and the generated TypeScript codes.

## Troubleshooting

The repos contains a few MAUI projects. Generally you can run Visual Studio as normal user rather than admin. However, for certain releases of Visual Studio or build task, when building MauiHeroes.Droid.csproj, you may encounter:
```
The specified task executable "java.exe" could not be run. System.ComponentModel.Win32Exception (0x80004005): Access is denied
   at System.Diagnostics.Process.StartWithCreateProcess(ProcessStartInfo startInfo)
   at Microsoft.Build.Utilities.ToolTask.StartToolProcess(Process proc)
   at Microsoft.Build.Utilities.ToolTask.ExecuteTool(String pathToTool, String responseFileCommands, String commandLineCommands)
   at Microsoft.Build.Utilities.ToolTask.Execute()
```

To resolve this, you may have to run Visual Studio as admin.

Offending Environment:
* Windows 11 Pro 24H2, Build 26100.2061
* Visual Studio 2022