///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="HttpClient.ts" />
namespace DemoWebApi_Controllers_Client {

    /**
     * Complex hero type
     */
    export interface Hero {
        id?: number;
        name?: string;
    }

}

namespace CoreWebApi_Controllers_Client {
    export class Values {
        constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
        }

        /**
         * GET api/Values
         */
        get(callback: (data : Array<string>) => any) {
            this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode);
        }

        /**
         * GET api/Values/{id}
         */
        getById(id: number, callback: (data : string) => any) {
            this.httpClient.get(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        }

        /**
         * POST api/Values
         */
        post(value: string, callback: (data : void) => any) {
            this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode);
        }

        /**
         * PUT api/Values/{id}
         */
        put(id: number, value: string, callback: (data : void) => any) {
            this.httpClient.put(this.baseUri + 'api/Values/' + id, value, callback, this.error, this.statusCode);
        }

        /**
         * DELETE api/Values/{id}
         */
        delete(id: number, callback: (data : void) => any) {
            this.httpClient.delete(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        }

        /**
         * POST api/Values/template
         */
        generateTemplate(tips: string, callback: (data : string) => any) {
            this.httpClient.post(this.baseUri + 'api/Values/template', tips, callback, this.error, this.statusCode);
        }
    }

}

namespace DemoWebApi_Controllers_Client {
    export class Heroes {
        constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }) {
        }

        /**
         * Get all heroes.
         * GET api/Heroes
         */
        get(callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any) {
            this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode);
        }

        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        getById(id: number, callback: (data : DemoWebApi_Controllers_Client.Hero) => any) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        }

        /**
         * DELETE api/Heroes/{id}
         */
        delete(id: number, callback: (data : void) => any) {
            this.httpClient.delete(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        }

        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        postWithQuery(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any) {
            this.httpClient.post(this.baseUri + 'api/Heroes/q?name=' + encodeURIComponent(name), null, callback, this.error, this.statusCode);
        }

        /**
         * POST api/Heroes
         */
        post(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any) {
            this.httpClient.post(this.baseUri + 'api/Heroes', name, callback, this.error, this.statusCode);
        }

        /**
         * Update hero.
         * PUT api/Heroes
         */
        put(hero: DemoWebApi_Controllers_Client.Hero, callback: (data : DemoWebApi_Controllers_Client.Hero) => any) {
            this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode);
        }

        /**
         * Search heroes
         * GET api/Heroes/{name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        search(name: string, callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + encodeURIComponent(name), callback, this.error, this.statusCode);
        }
    }

}

