import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortFolioId from '../components/PortfolioId'
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';



//help helpPage
//edit editExpensePage

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        {/*<Route path="/"  exact={true}/>*/}
        <Route path="/" component={Home}  exact={true}/>
        <Route path="/portfolio" component={Portfolio} exact={true}/>
        <Route path="/portfolio/:id" component={PortFolioId}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;