import React from 'react';
import Paragraph from './common/Paragraph';
import AppHeader from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <AppHeader />

        <Paragraph>
          To get started, edit src/App.js and save to reload.
        </Paragraph>
      </div>
    );
  }
}

export default App;
