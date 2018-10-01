import classNames from 'classnames';
import { forbidExtraProps } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

export const ICON_BACKGROUND_COLOR = {
  DEFAULT: 'default',
  GREEN: 'green',
};

export const ICON_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

const Icon = ({
  backgroundColor,
  className,
  color,
  name,
}) => (
  <i
    className={classNames(
      'icon',
      `icon-${name}`,
      `icon--color-${color}`,
      `icon--background-color-${backgroundColor}`,
      className,
    )}
  />
);

Icon.propTypes = forbidExtraProps({
  backgroundColor: PropTypes.oneOf(Object.values(ICON_BACKGROUND_COLOR)),
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ICON_COLOR)),
  name: PropTypes.oneOf([
    <% _.each(glyphs, function(i, index) { %><%= "'" + i['glyph-name'] + '\'' + (index === glyphs.length-1 ? '' : ',\n    ') %><% }); %>,
  ]),
});

Icon.defaultProps = {
  backgroundColor: ICON_COLOR.DEFAULT,
  className: '',
  color: ICON_COLOR.DEFAULT,
  name: '<%= glyphs[0]['glyph-name'] %>',
};

export default Icon;
