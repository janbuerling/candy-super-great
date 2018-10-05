import { forbidExtraProps } from 'airbnb-prop-types';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Button, { BUTTON_BACKGROUND_COLOR, BUTTON_SHAPE } from '../Button';
import './style.scss';
import Icon from '../Icon';

export const COUNTER_SCORE_COLOR = {
  DEFAULT: 'default',
  WHITE: 'white',
};

class Counter extends React.Component {
  static propTypes = forbidExtraProps({
    onChange: PropTypes.func.isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    scoreColor: PropTypes.oneOf(Object.values(COUNTER_SCORE_COLOR)),
  });

  static defaultProps = {
    max: 100,
    min: 0,
    scoreColor: COUNTER_SCORE_COLOR.DEFAULT,
  };

  state = {
    score: 0,
  };

  componentDidMount() {
    this.setState({ score: this.props.min });
  }

  addScore = () => {
    const { max, onChange } = this.props;
    const { score } = this.state;

    this.setState({ score: score < max ? score + 1 : max }, () => {
      onChange(this.state.score);
    });
  };

  reduceScore = () => {
    const { min, onChange } = this.props;
    const { score } = this.state;

    this.setState({ score: score > min ? score - 1 : min }, () => {
      onChange(this.state.score);
    });
  };

  render() {
    const { scoreColor } = this.props;
    const { score } = this.state;

    return (
      <div className='counter'>
        <Button
          backgroundColor={BUTTON_BACKGROUND_COLOR.WHITE}
          className='counter__counter-button'
          onClick={this.reduceScore}
          shape={BUTTON_SHAPE.ROUND}
        >
          <Icon name='minus' />
        </Button>

        <div
          className={classNames(
            'counter__counter-score',
            `counter__counter-score--color-${scoreColor}`,
          )}
        >
          {score}
        </div>

        <Button
          backgroundColor={BUTTON_BACKGROUND_COLOR.WHITE}
          className='counter__counter-button'
          onClick={this.addScore}
          shape={BUTTON_SHAPE.ROUND}
        >
          <Icon name='plus' />
        </Button>
      </div>
    );
  }
}

export default Counter;
