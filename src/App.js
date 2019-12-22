import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setConfiguration } from 'react-grid-system';
import ListPage from './Pages/ListPage';
import ItemPage from './Pages/ItemPage';
import NotFoundPage from './Pages/NotFoundPage';
import MainLayout from './Layouts/MainLayout';

setConfiguration({ gutterWidth: 16 });

const App = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route path="/" exact component={ListPage} />
        <Route path="/:id" exact component={ItemPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </MainLayout>
  </Router>
);

export default App;
