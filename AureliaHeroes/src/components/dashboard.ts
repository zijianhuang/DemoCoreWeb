import { resolve } from 'aurelia';
import './dashboard.css';
import { DemoWebApi_Controllers_Client } from '../clientapi/WebApiAureliaClientAuto';

export class DashboardComponent {
  heroes: DemoWebApi_Controllers_Client.Hero[] = [];
  private readonly heroesService = resolve(DemoWebApi_Controllers_Client.Heroes);

  async binding() {
    try {
      const heroes = await this.heroesService.getHeroes();
      this.heroes = heroes.slice(1, 5);
    } catch (error) {
      console.error(error);
    }
  }
}

export { DashboardComponent as DashboardPage };
