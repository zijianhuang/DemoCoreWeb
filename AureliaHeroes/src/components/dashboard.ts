import './dashboard.css';
import { DemoWebApi_Controllers_Client } from '../clientapi/WebApiAureliaClientAuto';

export class DashboardComponent {
  heroes: DemoWebApi_Controllers_Client.Hero[] = [];

  constructor(private readonly heroesService: DemoWebApi_Controllers_Client.Heroes) {}

  async binding() {
    try {
      const heroes = await this.heroesService.getHeroes();
      this.heroes = heroes.slice(1, 5);
    } catch (error) {
      console.error(error);
    }
  }
}
