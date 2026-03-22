import { DemoWebApi_Controllers_Client } from './clientapi/WebApiFetchClientAuto';
import { AppConfigConstants } from './testSettings';

export  let HeroesApi = heroesApi();
function heroesApi() {
  const apiBaseUri = AppConfigConstants.apiBaseUri;
  const service = new DemoWebApi_Controllers_Client.Heroes(apiBaseUri);
  return service;

}

