import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Page } from './page';
import './main.scss';
import BuildView from 'modules/builds/buildsView';

class Main extends React.Component<{},{}> {
  render () {
    return <main className="main-container">
      <Switch>
        <Route path={Page.home} exact={true} component={BuildView} />
        <Route path={Page.build} component={BuildView} />
        <Redirect to={Page.home} />
      </Switch>
    </main>
  }
}

export default Main;