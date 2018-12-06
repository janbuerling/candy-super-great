import React from 'react';
import { toast } from 'react-toastify';
import Button, { BUTTON_BACKGROUND_COLOR, BUTTON_COLOR } from '../../common/Button';
import Counter, { COUNTER_SCORE_COLOR } from '../../common/Counter';
import ProductList from '../../products/ProductList';
import { SweetsContext } from '../SweetsProvider';
import './style.scss';

class SweetsPage extends React.Component {
  /**
   * @description renders every product card footer from product card list.
   * @param product
   * @return {*}
   */
  renderProductCardFooter = ({ name }) => {
    let score = 0;

    return (
      <div className='product-card__footer'>
        <Button
          backgroundColor={BUTTON_BACKGROUND_COLOR.TRANSPARENT}
          className='product-card__add-product-button'
          color={BUTTON_COLOR.WHITE}
          onClick={() => {
            toast(`🦄 Added ${score} x ${name}`);
          }}
        >
          Add To Sweets Box
        </Button>

        <div className='product-card__add-counter-wrapper'>
          <Counter
            onChange={(_score) => {
              score = _score;
            }}
            scoreColor={COUNTER_SCORE_COLOR.WHITE}
          />
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className='sweets-page'>
        <SweetsContext.Consumer>
          {({ sweets }) => (
            <ProductList
              products={sweets}
              renderCardFooter={this.renderProductCardFooter}
            />
          )}
        </SweetsContext.Consumer>
      </div>
    );
  }
}

export default SweetsPage;
