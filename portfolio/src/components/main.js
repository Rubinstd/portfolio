  
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import HomePage from './homepage'

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;