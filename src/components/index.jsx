import React from 'react';
import AppHeader from './app/AppHeader';
import AppPage from './app/AppPage';
import SweetsProvider from './sweets/SweetsProvider';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <SweetsProvider>
          <AppHeader />
          <AppPage />
        </SweetsProvider>
      </div>
    );
  }
}

export default App;
