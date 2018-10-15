import PropTypes from 'prop-types';
import React from 'react';
import sweetsMock from '../../../mock/sweets';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
export const SweetsContext = React.createContext({ sweets: [] });

class SweetsProvider extends React.Component {
  state = {
    sweets: sweetsMock,
  };

  render() {
    const { children } = this.props;
    const { sweets } = this.state;

    return (
      <SweetsContext.Provider value={{ sweets }}>
        {children}
      </SweetsContext.Provider>
    );
  }
}

SweetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SweetsProvider;
