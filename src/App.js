import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './Pages/ListPage';
import ItemPage from './Pages/ItemPage';
import NotFoundPage from './Pages/NotFoundPage';


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ListPage} />
      <Route path="/:id" exact component={ItemPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;