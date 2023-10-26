import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Demo from './Demo';
import HeroDetail from './HeroDetail';
import Heroes from './Heroes';
import Home from './Home';

function AppRouteMap() {
  return useRoutes([
    { path: 'demo', element: <Demo /> },
    { path: '/', element: <Home /> },
    {
      element: <Home />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'heroes', element: <Heroes /> },
        { path: 'detail/:id', element: <HeroDetail /> }
      ]
    }
  ]);

}

export default function App() {
  return (
    <BrowserRouter>
      <AppRouteMap />
    </BrowserRouter>
  );
}
