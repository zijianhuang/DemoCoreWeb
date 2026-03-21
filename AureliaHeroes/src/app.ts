import { IRouteViewModel, Routeable } from '@aurelia/router';
import { DashboardComponent } from './components/dashboard';
import { HeroDetailComponent } from './components/hero-detail';
import { HeroesComponent } from './components/heroes';

export class App implements IRouteViewModel  {
  static title = 'Heroes';

  static routes: Routeable[] = [
    { id: 'dashboard', path: ['', 'dashboard'], component: DashboardComponent, title: 'Dashboard' },
    { id: 'heroes', path: 'heroes', component: HeroesComponent, title: 'Heroes' },
    { id: 'detail', path: 'detail/:id', component: HeroDetailComponent, title: 'Hero Detail' },
  ];

  public message = 'Aurelia Heroes!';
}
