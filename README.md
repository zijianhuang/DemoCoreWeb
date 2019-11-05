[Strongly Typed Client API Generators](https://github.com/zijianhuang/webapiclientgen) generate strongly typed client API in C# codes and TypeScript codes. This repository contains code examples explained in the following CodeProject.com articles:

* [Generate C# Client API for ASP.NET Core Web API](https://www.codeproject.com/Articles/1243908/Generate-Csharp-Client-API-for-ASP-NET-Core-Web-AP)


And this repository contains the following demo applications:
1. CoreWebApi, ASP.NET Core Web API providing data to other test suites.
1. CoreMvc, ASP.NET Core MVC.
1. CoreNG, .NET Core + Angular 2+ with Heroes Tour.
1. axios, JEST test suite using the generated TypeScript codes for Axios which is recommended by React and Vue.js.
1. vueTS, JEST test suite with Vue TypeScript and the generated TypeScript codes.
1. **Projects marked with number 3 are .NET Core 3.0 projects.**


**Remarks:** 

* .NET Core 2.x had dependency on Newtonsoft.JSON, while .NET Core 3.0 had been decoupled from Neewtonsoft.JSON and the default serializer is working well in most scenarios except for Tuple, 2D array and anonymous object etc. If you would support these data types or would keep 100% compitability with the serialization of NewtonSoft.JSON, you should explicitly include package `Microsoft.AspNetCore.Mvc.NewtonsoftJson` and add add `AddNewtonsoftJson()` in `Startup.cs`.