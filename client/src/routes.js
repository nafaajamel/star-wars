import { Switch, Route } from 'react-router-dom';
import CharactersPage from './pages/characters';
import PlanetsPage from './pages/planets';
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/characters'>
        <CharactersPage />
      </Route>
      <Route exact path='/planets'>
        <PlanetsPage />
      </Route>
      <Route path='/'>
        <PlanetsPage />
      </Route>
    </Switch>
  );
};

export default Routes;
