import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { routeObject } from './router'

function App() {
  return (
    <Router>
      <Switch>
        {routeObject.map((item, index) => {
          return <Route key={`${index}`} exact path={item.path} component={item.component} />
        })}
      </Switch>
    </Router>
  );
}

export default App;
