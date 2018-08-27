"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var CoreNG_Controllers_Client;
(function (CoreNG_Controllers_Client) {
    var SampleData = /** @class */ (function () {
        function SampleData(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * Get random weather forecast
         * GET api/SampleData/WeatherForecasts
         * @return {Array<CoreNG_Controllers_Client.WeatherForecast>} A list of random weather data
         */
        SampleData.prototype.weatherForecasts = function () {
            return this.http.get(this.baseUri + 'api/SampleData/WeatherForecasts');
        };
        SampleData = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri'))
        ], SampleData);
        return SampleData;
    }());
    CoreNG_Controllers_Client.SampleData = SampleData;
})(CoreNG_Controllers_Client = exports.CoreNG_Controllers_Client || (exports.CoreNG_Controllers_Client = {}));
