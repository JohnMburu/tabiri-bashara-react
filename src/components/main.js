import React from 'react';
import { Switch , Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Privacy from './privacy';
import Prediction from './prediction';
import Sectors from './sectors';
import Types from './types';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/prediction" component={Prediction} />
        <Route path="/sectors" component={Sectors} />
        <Route path="/types" component={Types} />

    </Switch>
)

export default Main;