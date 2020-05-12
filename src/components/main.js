import React from 'react';
import { Switch , Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './about';
import Privacy from './privacy';
import Legal from './legal';
import Prediction from './prediction';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/tnc" component={Legal} />
        <Route path="/prediction" component={Prediction} />

    </Switch>
)

export default Main;