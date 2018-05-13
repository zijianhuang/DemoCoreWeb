///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="HttpClient.ts" />
var CoreWebApi_Controllers_Client;
(function (CoreWebApi_Controllers_Client) {
    var Values = /** @class */ (function () {
        function Values(baseUri, httpClient, error, statusCode) {
            if (baseUri === void 0) { baseUri = HttpClient.locationOrigin; }
            if (httpClient === void 0) { httpClient = new HttpClient(); }
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/Values
         * @return {Array<string>}
         */
        Values.prototype.get = function (callback) {
            this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode);
        };
        /**
         * GET api/Values/{id}
         * @param {number} id
         * @return {string}
         */
        Values.prototype.getById = function (id, callback) {
            this.httpClient.get(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Values
         * @param {string} value
         * @return {void}
         */
        Values.prototype.post = function (value, callback) {
            this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode);
        };
        /**
         * PUT api/Values/{id}
         * @param {number} id
         * @param {string} value
         * @return {void}
         */
        Values.prototype.put = function (id, value, callback) {
            this.httpClient.put(this.baseUri + 'api/Values/' + id, value, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Values/{id}
         * @param {number} id
         * @return {void}
         */
        Values.prototype["delete"] = function (id, callback) {
            this.httpClient["delete"](this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        };
        return Values;
    }());
    CoreWebApi_Controllers_Client.Values = Values;
})(CoreWebApi_Controllers_Client || (CoreWebApi_Controllers_Client = {}));
var DemoWebApi_Controllers_Client;
(function (DemoWebApi_Controllers_Client) {
    var Heroes = /** @class */ (function () {
        function Heroes(baseUri, httpClient, error, statusCode) {
            if (baseUri === void 0) { baseUri = HttpClient.locationOrigin; }
            if (httpClient === void 0) { httpClient = new HttpClient(); }
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/Heroes
         * @return {Array<DemoWebApi_Controllers_Client.Hero>}
         */
        Heroes.prototype.get = function (callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode);
        };
        /**
         * GET api/Heroes/{id}
         * @param {number} id
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        Heroes.prototype.getById = function (id, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Heroes/{id}
         * @param {number} id
         * @return {void}
         */
        Heroes.prototype["delete"] = function (id, callback) {
            this.httpClient["delete"](this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Heroes/q?name={name}
         * @param {string} name
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        Heroes.prototype.postWithQuery = function (name, callback) {
            this.httpClient.post(this.baseUri + 'api/Heroes/q?name=' + encodeURIComponent(name), null, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Heroes
         * @param {string} name
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        Heroes.prototype.post = function (name, callback) {
            this.httpClient.post(this.baseUri + 'api/Heroes', name, callback, this.error, this.statusCode);
        };
        /**
         * PUT api/Heroes
         * @param {DemoWebApi_Controllers_Client.Hero} hero
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        Heroes.prototype.put = function (hero, callback) {
            this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode);
        };
        /**
         * GET api/Heroes/{name}
         * @param {string} name
         * @return {Array<DemoWebApi_Controllers_Client.Hero>}
         */
        Heroes.prototype.search = function (name, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + encodeURIComponent(name), callback, this.error, this.statusCode);
        };
        return Heroes;
    }());
    DemoWebApi_Controllers_Client.Heroes = Heroes;
})(DemoWebApi_Controllers_Client || (DemoWebApi_Controllers_Client = {}));
