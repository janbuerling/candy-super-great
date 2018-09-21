import { forbidExtraProps } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export const BUTTON_BACKGROUND_COLOR = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TRANSPARENT: 'transparent',
};

export const BUTTON_FONT_TYPE = {
  DEFAULT: 'default',
  HANDWRITING: 'handwriting',
};

export const BUTTON_SHAPE = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
  CORNERED: 'cornered',
};

export const BUTTON_BORDER = {
  DEFAULT: 'default',
  NONE: 'none',
};

const Button = ({
  backgroundColor,
  border,
  children,
  className,
  fontType,
  isDisabled,
  onClick,
  shape,
  type,
}) => (
  <button
    className={classNames(
      'button',
      `button--border-${border}`,
      `button--color-${backgroundColor}`,
      `button--shape-${shape}`,
      `button--font-type-${fontType}`,
      className,
    )}
    disabled={isDisabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export const buttonPropTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.oneOf(Object.values(BUTTON_BACKGROUND_COLOR)),
  border: PropTypes.oneOf(Object.values(BUTTON_BORDER)),
  className: PropTypes.string, // This prop should only be used in very rare cases!!!
  fontType: PropTypes.oneOf(Object.values(BUTTON_FONT_TYPE)),
  isDisabled: PropTypes.bool,
  shape: PropTypes.oneOf(Object.values(BUTTON_SHAPE)),
  type: PropTypes.oneOf([
    'button',
    'submit',
  ]),
};

Button.propTypes = forbidExtraProps(buttonPropTypes);
Button.defaultProps = {
  backgroundColor: BUTTON_BACKGROUND_COLOR.DEFAULT,
  border: BUTTON_BORDER.DEFAULT,
  className: '',
  fontType: BUTTON_FONT_TYPE.DEFAULT,
  isDisabled: false,
  shape: BUTTON_SHAPE.DEFAULT,
  type: 'button',
};

export default Button;
