import { resolve } from 'aurelia';
import { IRouter } from '@aurelia/router';
import './heroes.css';
import { DemoWebApi_Controllers_Client } from '../clientapi/WebApiAureliaClientAuto';

export class HeroesComponent {
    heroes?: DemoWebApi_Controllers_Client.Hero[];
    selectedHero?: DemoWebApi_Controllers_Client.Hero;
    private heroName!: HTMLInputElement;
    private readonly router = resolve(IRouter);
    private readonly heroesService = resolve(DemoWebApi_Controllers_Client.Heroes);

    getHeroes(): void {
        this.heroesService.getHeroes().then(
            heroes => {
                this.heroes = heroes;
            }
        );
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroesService.post(name).then(
            hero => {
                this.heroes?.push(hero);
                this.selectedHero = undefined;
            });
    }

    delete(hero: DemoWebApi_Controllers_Client.Hero): void {
        this.heroesService.delete(hero.id!).then(
            () => {
                this.heroes = this.heroes?.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = undefined; }
            });
    }

    binding() {
        this.getHeroes();
    }

    onSelect(hero: DemoWebApi_Controllers_Client.Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        if (this.selectedHero?.id == null) {
            return;
        }

        void this.router.load(`detail/${this.selectedHero.id}`);
    }

    addAndClear() {
        this.add(this.heroName.value);
        this.heroName.value = '';
    }
}
