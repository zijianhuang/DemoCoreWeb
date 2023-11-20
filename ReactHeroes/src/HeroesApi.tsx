import { DemoWebApi_Controllers_Client } from './clientapi/WebApiCoreAxiosClientAuto';

export  let HeroesApi = heroesApi();
function heroesApi() {
  const apiBaseUri = 'http://localhost:5000/';
  const service = new DemoWebApi_Controllers_Client.Heroes(apiBaseUri);
  return service;

}

