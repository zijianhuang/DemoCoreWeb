import { DashboardPage } from './components/dashboard';
import { HeroDetailPage } from './components/hero-detail';
import { HeroesPage } from './components/heroes';

export class App {
  static title = 'Heroes';

  static routes = [
    { id: 'dashboard', path: ['', 'dashboard'], component: DashboardPage, title: 'Dashboard' },
    { id: 'heroes', path: 'heroes', component: HeroesPage, title: 'Heroes' },
    { id: 'detail', path: 'detail/:id', component: HeroDetailPage, title: 'Hero Detail' },
  ];

  public message = 'Aurelia Heroes!';
}
