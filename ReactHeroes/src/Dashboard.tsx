import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { DemoWebApi_Controllers_Client } from './clientapi/WebApiCoreAxiosClientAuto';
import { HeroesApi } from './HeroesApi';

export default class Dashboard extends Component<{}, { loading: boolean }> {
  heroes: DemoWebApi_Controllers_Client.Hero[] = [];
  private service = HeroesApi;

  constructor(props: any) {
    super(props);
    this.state= {loading: true};
  }

  componentDidMount(): void {
    this.service.getHeros().then(
      heroes => {
        this.heroes = heroes.slice(1, 5);
        console.debug('heroes loaded');
        this.setState({loading:false});
      }
    ).catch(error => console.error(error));
  }

  override render(): React.ReactNode {
    if (this.state.loading){
      return null;
    }
    
    console.debug('Heroes: '+ JSON.stringify(this.heroes));
    const heroesHtml = this.heroes.map(hero =>
      <Link to={`/detail/${hero.id}`} key={hero.id}>{hero.name}</Link>
    );

    return (
      <div className="Dashboard">
        <h2>Top Heroes</h2>
        <div className="heroes-menu">
          {heroesHtml}
        </div>
      </div>
    );
  }
}

