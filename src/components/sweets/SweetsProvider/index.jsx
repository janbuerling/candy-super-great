import PropTypes from 'prop-types';
import React from 'react';
import sweetsMock from '../../../mock/sweets';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
export const SweetsContext = React.createContext({ sweets: [] });

class SweetsProvider extends React.Component {
  state = {
    sweets: sweetsMock,
    sweetsBox: [],
  };

  addToSweetsBox = () => {

  };

  render() {
    const { children } = this.props;
    const { sweets, sweetsBox } = this.state;

    return (
      <SweetsContext.Provider value={{ sweets, sweetsBox }}>
        { children }
      </SweetsContext.Provider>
    );
  }
}

SweetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SweetsProvider;
