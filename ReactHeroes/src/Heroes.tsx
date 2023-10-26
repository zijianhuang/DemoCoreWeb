import { useEffect, useRef, useState } from 'react';
import './Heroes.css';
import { DemoWebApi_Controllers_Client } from './clientapi/WebApiCoreAxiosClientAuto';

import { Link, useNavigate } from 'react-router-dom';
import {HeroesApi} from './HeroesApi';

export default function Heroes() {
  const service = HeroesApi;
  const [heroes, setHeroes] = useState<DemoWebApi_Controllers_Client.Hero[]>([]);
  const [selectedHero, setSelectedHero] = useState<DemoWebApi_Controllers_Client.Hero | undefined>(undefined);
  const navigate = useNavigate();
  const heroNameElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.debug('getHeros...');
    service.getHeros().then(
      data => {
        setHeroes(data);
      }
    ).catch(error => console.error(error))
  }, []); //empty array to run only once. But in dev mode, it will run twice, since the cmponent is mounted twice. https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react

  return (
    <>
      <h2>My Heroes</h2>
      <div>
        <label htmlFor="new-hero">Hero name: </label>
        <input id="new-hero" ref={heroNameElement} />
        <button type="button" className="add-button" onClick={addAndClear}>
          Add hero
        </button>
      </div >

      <ul className="heroes">
        {
          heroes.map((h) =>
            <li>
              <Link to={`/detail/${h.id}`} key={h.id}>
                <span className="badge">{h.id}</span> {h.name}
              </Link>
              <button type="button" className="delete" title="delete hero" onClick={() => deleteHero(h)}>x</button>
            </li >)
        }
      </ul >
    </>

  );

  function onSelect(hero: DemoWebApi_Controllers_Client.Hero): void {
    setSelectedHero(hero);
  }

  function gotoDetail(): void {
    navigate(`/detail/${selectedHero?.id}`);
  }

  function addAndClear() {
    add(heroNameElement.current?.value);
    heroNameElement.current!.value = '';
  }

  function deleteHero(hero: DemoWebApi_Controllers_Client.Hero): void { //delete is a reserved word in React
    service.delete(hero.id!).then(
      () => {
        setHeroes(heroes?.filter(h => h !== hero));
        if (selectedHero === hero) { setSelectedHero(undefined); }
      });
  }

  function add(name: string | undefined): void {
    if (!name) { return; }

    name = name.trim();
    service.post(name).then(
      hero => {
        setHeroes([...heroes, hero]);
        console.debug('hero added: ' + heroes.length);
        setSelectedHero(undefined);
      });
  }

}

