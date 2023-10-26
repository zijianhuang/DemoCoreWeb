import { Link, Outlet } from 'react-router-dom';
import './HeroDetail.css';

export default function Home() { 

  return (
    <>
      <h1>React Heroes!</h1>
      <nav>
        <Link to="dashboard">Dashboard</Link>
        <Link to="heroes">Heroes</Link>
      </nav>

      <Outlet/>
    </>
  );

}

