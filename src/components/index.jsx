import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import AppHeader from './app/AppHeader';
import AppPage from './app/AppPage';
import SweetsProvider from './sweets/SweetsProvider';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <SweetsProvider>
              <Route path='/' component={AppHeader} />
              <Route path='/' component={AppPage} />
            </SweetsProvider>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
