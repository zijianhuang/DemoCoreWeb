import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import * as namespaces from '../clientapi/WebApiCoreNG2FormGroupClientAuto';
import { SiteConfigConstants } from '../environments/environment';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withFetch()),

        provideRouter(routes),
        {
            provide: namespaces.DemoWebApi_Controllers_Client.Heroes,
            // useFactory: (http: HttpClient)=> {
            //     if (SiteConfigConstants.apiBaseuri) {
            //         console.debug('apiBaseuri:' + SiteConfigConstants.apiBaseuri)
            //         return new namespaces.DemoWebApi_Controllers_Client.Heroes(SiteConfigConstants.apiBaseuri, http);
            //     }
            
            //     const _baseUri = window.location.origin + '/';
            //     const webApiUrl = _baseUri + 'webapi/';
            //     console.debug('webApiUrl: ' + webApiUrl);
            //     return new namespaces.DemoWebApi_Controllers_Client.Heroes(webApiUrl, http);
            
            // },

            useFactory: (http: HttpClient) => {
                let baseUri: string;
              
                if (SiteConfigConstants.apiBaseuri) {
                  console.debug('apiBaseuri:', SiteConfigConstants.apiBaseuri);
                  baseUri = SiteConfigConstants.apiBaseuri;
                } else {
                  const isBrowser = typeof window !== 'undefined';
                  baseUri = isBrowser
                    ? window.location.origin + '/'
                    : 'http://localhost:4200/'; // or your SSR base URI
                }
              
                return new namespaces.DemoWebApi_Controllers_Client.Heroes(baseUri, http);
              },
              
            deps: [HttpClient],
        }, 
        
        provideClientHydration(withEventReplay())

    ]
};
