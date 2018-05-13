///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="HttpClient.ts" />
namespace DemoWebApi_Controllers_Client {
    export interface Hero {
        id?: number;
        name?: string;
    }

}

namespace CoreWebApi_Controllers_Client {
    export class Values {
        constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }){
        }

        /** 
         * GET api/Values
         * @return {Array<string>} 
         */
        get(callback: (data : Array<string>) => any){
            this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode);
        }

        /** 
         * GET api/Values/{id}
         * @param {number} id 
         * @return {string} 
         */
        getById(id: number, callback: (data : string) => any){
            this.httpClient.get(this.baseUri + 'api/Values/'+id, callback, this.error, this.statusCode);
        }

        /** 
         * POST api/Values
         * @param {string} value 
         * @return {void} 
         */
        post(value: string, callback: (data : void) => any){
            this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode);
        }

        /** 
         * PUT api/Values/{id}
         * @param {number} id 
         * @param {string} value 
         * @return {void} 
         */
        put(id: number, value: string, callback: (data : void) => any){
            this.httpClient.put(this.baseUri + 'api/Values/'+id, value, callback, this.error, this.statusCode);
        }

        /** 
         * DELETE api/Values/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number, callback: (data : void) => any){
            this.httpClient.delete(this.baseUri + 'api/Values/'+id, callback, this.error, this.statusCode);
        }
    }

}

namespace DemoWebApi_Controllers_Client {
    export class Heroes {
        constructor(private baseUri: string = HttpClient.locationOrigin, private httpClient: HttpClientBase = new HttpClient(), private error?: (xhr: JQueryXHR, ajaxOptions: string, thrown: string) => any, private statusCode?: { [key: string]: any; }){
        }

        /** 
         * GET api/Heroes
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} 
         */
        get(callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any){
            this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode);
        }

        /** 
         * GET api/Heroes/{id}
         * @param {number} id 
         * @return {DemoWebApi_Controllers_Client.Hero} 
         */
        getById(id: number, callback: (data : DemoWebApi_Controllers_Client.Hero) => any){
            this.httpClient.get(this.baseUri + 'api/Heroes/'+id, callback, this.error, this.statusCode);
        }

        /** 
         * DELETE api/Heroes/{id}
         * @param {number} id 
         * @return {void} 
         */
        delete(id: number, callback: (data : void) => any){
            this.httpClient.delete(this.baseUri + 'api/Heroes/'+id, callback, this.error, this.statusCode);
        }

        /** 
         * POST api/Heroes/q?name={name}
         * @param {string} name 
         * @return {DemoWebApi_Controllers_Client.Hero} 
         */
        postWithQuery(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any){
            this.httpClient.post(this.baseUri + 'api/Heroes/q?name='+encodeURIComponent(name), null, callback, this.error, this.statusCode);
        }

        /** 
         * POST api/Heroes
         * @param {string} name 
         * @return {DemoWebApi_Controllers_Client.Hero} 
         */
        post(name: string, callback: (data : DemoWebApi_Controllers_Client.Hero) => any){
            this.httpClient.post(this.baseUri + 'api/Heroes', name, callback, this.error, this.statusCode);
        }

        /** 
         * PUT api/Heroes
         * @param {DemoWebApi_Controllers_Client.Hero} hero 
         * @return {DemoWebApi_Controllers_Client.Hero} 
         */
        put(hero: DemoWebApi_Controllers_Client.Hero, callback: (data : DemoWebApi_Controllers_Client.Hero) => any){
            this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode);
        }

        /** 
         * GET api/Heroes/{name}
         * @param {string} name 
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} 
         */
        search(name: string, callback: (data : Array<DemoWebApi_Controllers_Client.Hero>) => any){
            this.httpClient.get(this.baseUri + 'api/Heroes/'+encodeURIComponent(name), callback, this.error, this.statusCode);
        }
    }

}

