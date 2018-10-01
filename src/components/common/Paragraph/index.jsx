import { forbidExtraProps } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export const PARAGRAPH_ALIGN = {
  INHERIT: 'inherit',
  LEFT: 'left',
  CENTER: 'center',
  RIGHT: 'right',
};

export const PARAGRAPH_FONT_TYPE = {
  DEFAULT: 'default',
  HANDWRITING: 'handwriting',
};

export const PARAGRAPH_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

const Paragraph = ({
  align,
  children,
  className,
  color,
  fontType,
}) => (
  <p
    className={classNames(
      'paragraph',
      `paragraph--font-type-${fontType}`,
      { 'paragraph--color-white': color === PARAGRAPH_COLOR.WHITE },
      { 'paragraph--align-left': align === PARAGRAPH_ALIGN.LEFT },
      { 'paragraph--align-center': align === PARAGRAPH_ALIGN.CENTER },
      { 'paragraph--align-right': align === PARAGRAPH_ALIGN.RIGHT },
      className,
    )}
  >
    {children}
  </p>
);

Paragraph.propTypes = forbidExtraProps({
  align: PropTypes.oneOf(Object.values(PARAGRAPH_ALIGN)),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(PARAGRAPH_COLOR)),
  fontType: PropTypes.oneOf(Object.values(PARAGRAPH_FONT_TYPE)),
});

Paragraph.defaultProps = {
  align: PARAGRAPH_ALIGN.INHERIT,
  className: '',
  color: PARAGRAPH_COLOR.DEFAULT,
  fontType: PARAGRAPH_FONT_TYPE.DEFAULT,
};

export default Paragraph;
