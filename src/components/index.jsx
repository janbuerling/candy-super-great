import React from 'react';
import AppHeader from './app/AppHeader';
import AppPage from './app/AppPage';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <AppHeader />
        <AppPage />
      </div>
    );
  }
}

export default App;
