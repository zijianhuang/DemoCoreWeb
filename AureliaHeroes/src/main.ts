import Aurelia, { Registration } from 'aurelia';
import { HttpClient } from '@aurelia/fetch-client';
import { RouterConfiguration } from '@aurelia/router';
import { StandardConfiguration } from '@aurelia/runtime-html';
import environment from '../config/environment.json';
import { App } from './app';
import { DemoWebApi_Controllers_Client } from './clientapi/WebApiAureliaClientAuto';
import { SiteConfigConstants } from './testSettings';

const httpClient = new HttpClient();
httpClient.baseUrl = SiteConfigConstants.apiBaseUri ?? '';

void Aurelia
  .register(
    StandardConfiguration,
    RouterConfiguration.customize({
      historyStrategy: 'push',
    }),
    Registration.instance(
      DemoWebApi_Controllers_Client.Heroes,
      new DemoWebApi_Controllers_Client.Heroes(httpClient),
    ),
  )
  .app({
    component: App,
    host: document.querySelector('app-root')!,
  })
  .start();

if (environment.debug) {
  console.debug('Aurelia 2 app started in debug mode.');
}
