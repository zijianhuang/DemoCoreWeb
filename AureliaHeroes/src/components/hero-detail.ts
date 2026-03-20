import { resolve } from 'aurelia';
import { IRouteViewModel, IRouter, Params } from '@aurelia/router';
import './hero-detail.css';
import { DemoWebApi_Controllers_Client } from '../clientapi/WebApiAureliaClientAuto';

export class HeroDetailComponent implements IRouteViewModel {
  hero?: DemoWebApi_Controllers_Client.Hero;
  private readonly router = resolve(IRouter);
  private readonly heroesService = resolve(DemoWebApi_Controllers_Client.Heroes);

  async loading(params: Params) {
    const id = String(params.id);

    try {
      const hero = await this.heroesService.getHero(id);
      if (hero) {
        this.hero = hero;
        document.title = `${hero.name} | Heroes`;
      }
    } catch (error) {
      alert(error);
    }
  }

  save(): void {
    this.heroesService.put(this.hero).then(
      d => {
        console.debug('response: ' + JSON.stringify(d));
      }
    ).catch(error => alert(error));
  }

  goBack(): void {
    void this.router.load('heroes');
  }
}
