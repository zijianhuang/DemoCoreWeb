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
         */
        Values.prototype.get = function (callback) {
            this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode);
        };
        /**
         * GET api/Values/{id}
         */
        Values.prototype.getById = function (id, callback) {
            this.httpClient.get(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Values
         */
        Values.prototype.post = function (value, callback) {
            this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode);
        };
        /**
         * PUT api/Values/{id}
         */
        Values.prototype.put = function (id, value, callback) {
            this.httpClient.put(this.baseUri + 'api/Values/' + id, value, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Values/{id}
         */
        Values.prototype["delete"] = function (id, callback) {
            this.httpClient["delete"](this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Values/template
         */
        Values.prototype.generateTemplate = function (tips, callback) {
            this.httpClient.post(this.baseUri + 'api/Values/template', tips, callback, this.error, this.statusCode);
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
         * Get all heroes.
         * GET api/Heroes
         */
        Heroes.prototype.get = function (callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode);
        };
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        Heroes.prototype.getById = function (id, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        };
        /**
         * DELETE api/Heroes/{id}
         */
        Heroes.prototype["delete"] = function (id, callback) {
            this.httpClient["delete"](this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        };
        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        Heroes.prototype.postWithQuery = function (name, callback) {
            this.httpClient.post(this.baseUri + 'api/Heroes/q?name=' + encodeURIComponent(name), null, callback, this.error, this.statusCode);
        };
        /**
         * POST api/Heroes
         */
        Heroes.prototype.post = function (name, callback) {
            this.httpClient.post(this.baseUri + 'api/Heroes', name, callback, this.error, this.statusCode);
        };
        /**
         * Update hero.
         * PUT api/Heroes
         */
        Heroes.prototype.put = function (hero, callback) {
            this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode);
        };
        /**
         * Search heroes
         * GET api/Heroes/{name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        Heroes.prototype.search = function (name, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + encodeURIComponent(name), callback, this.error, this.statusCode);
        };
        return Heroes;
    }());
    DemoWebApi_Controllers_Client.Heroes = Heroes;
})(DemoWebApi_Controllers_Client || (DemoWebApi_Controllers_Client = {}));
