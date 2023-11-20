import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './HeroDetail.css';
import { DemoWebApi_Controllers_Client } from './clientapi/WebApiCoreAxiosClientAuto';
import { HeroesApi } from './HeroesApi';

export default function HeroDetail() { //https://stackoverflow.com/questions/47561848/property-value-does-not-exist-on-type-readonly
  const service = HeroesApi
  const { id } = useParams();
  const [hero, setHero] = useState<DemoWebApi_Controllers_Client.Hero | undefined>(undefined);
  const heroId: any = id;
  const navigate = useNavigate();
  const nameInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.debug('getHero...');
    service.getHero(heroId).then(
      h => {
        if (h) {
          setHero(h);
        }
      }
    ).catch(error => alert(error));
  }, []); //empty array to run only once. But in dev mode, it will run twice, since the cmponent is mounted twice. https://stackoverflow.com/questions/72238175/why-useeffect-running-twice-and-how-to-handle-it-well-in-react

  if (!hero) {
    return <div>AAA</div>;
  }

  function save(): void {
    service.put(hero!).then(
      d => {
        setHero({...hero})
        console.debug('response: ' + JSON.stringify(d));
      }
    ).catch(error => alert(error));
  }

  function goBack(): void {
    navigate(-1);
  }

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    hero!.name = e.currentTarget.value;
    setHero({...hero});
  }

  return (
    <div className="hero-detail">
      <h2>{hero.name} Details</h2>
      <div><span>id: </span>{hero!.id}</div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input id="hero-name" value={hero.name!} placeholder="Name" onChange={handleChange} ref={nameInput} />
      </div>

      <button type="button" onClick={goBack}>go back</button>
      <button type="button" onClick={save}>save</button>
    </div>
  );
}

