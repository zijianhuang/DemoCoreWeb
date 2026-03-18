import { DemoWebApi_Controllers_Client } from './clientapi/WebApiFetchClientAuto';
import { SiteConfigConstants } from './testSettings';

export  let HeroesApi = heroesApi();
function heroesApi() {
  const apiBaseUri = SiteConfigConstants.apiBaseUri;
  const service = new DemoWebApi_Controllers_Client.Heroes(apiBaseUri);
  return service;

}

