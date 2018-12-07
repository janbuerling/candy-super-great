import React from 'react';
import { SweetsContext } from './index';

export default function withSweetsConsumer(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <SweetsContext.Consumer>
          {({ sweets }) => (
            <WrappedComponent
              sweets={sweets}
              {...this.props}
            />
          )}
        </SweetsContext.Consumer>
      );
    }
  };
}
