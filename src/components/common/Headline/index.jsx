import { forbidExtraProps } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

export const HEADLINE_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

export const HEADLINE_FONT_TYPE = {
  SANS_SERIF: 'sans-serif',
  SERIF: 'serif',
};

export const HEADLINE_TAG = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
};

export const HEADLINE_STYLE = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
};

export const HEADLINE_WEIGHT = {
  DEFAULT: 'default',
  BOLD: 'bold',
};

const Headline = ({
  children,
  className,
  color,
  fontType,
  headlineStyle,
  noMargin,
  tag,
  weight,
}) => {
  const HeadlineTag = `${tag}`;

  return (
    <HeadlineTag
      className={classNames(
        `headline--color-${color}`,
        `headline--style-${headlineStyle}`,
        `headline--weight-${weight}`,
        `headline--font-type-${fontType}`,
        { 'headline--no-margin': noMargin },
        className,
      )}
    >
      {children}
    </HeadlineTag>
  );
};

Headline.propTypes = forbidExtraProps({
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(HEADLINE_COLOR)),
  fontType: PropTypes.oneOf(Object.values(HEADLINE_FONT_TYPE)),
  headlineStyle: PropTypes.oneOf(Object.values(HEADLINE_STYLE)),
  noMargin: PropTypes.bool,
  tag: PropTypes.oneOf(Object.values(HEADLINE_TAG)),
  weight: PropTypes.oneOf(Object.values(HEADLINE_WEIGHT)),
});

Headline.defaultProps = {
  className: '',
  color: HEADLINE_COLOR.DEFAULT,
  fontType: HEADLINE_FONT_TYPE.SERIF,
  headlineStyle: HEADLINE_STYLE.H2,
  noMargin: false,
  tag: HEADLINE_TAG.H2,
  weight: HEADLINE_WEIGHT.DEFAULT,
};

export default Headline;
