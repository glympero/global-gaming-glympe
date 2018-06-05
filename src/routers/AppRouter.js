import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDashboard from '../components/MovieDashboard';
import MoviePage from '../components/MoviePage';
import Header from '../components/Header';
import Footer from '../components/Footer';

import NotFoundPage from '../components/NotFoundPage';
  
 const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={MovieDashboard} exact={true} />
          <Route path="/movies" component={MoviePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );

  export default AppRouter;