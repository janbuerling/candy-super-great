import { shallow } from 'enzyme';
import React from 'react';
import Counter from './index';

describe('Counter', () => {
  const defaultProps = {};

  const getComponent = props => shallow((
    <Counter {...defaultProps} {...props} />
  ));

  describe('Prop: onChange', () => {
    it('call prop function onChange if a change happens', () => {
      const handler = jest.fn();
      const component = getComponent({
        handler,
      });

      component.find('Button').simulate('click');
      expect(handler).toHaveBeenCalled();
    });
  });
});
