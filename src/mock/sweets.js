import candyCaneImage from '../assets/images/candy-cane.png';
import centerShockColaImage from '../assets/images/center-schock-cola.png';
import centerShockCherryImage from '../assets/images/center-schock-cherry.png';
import snickersImage from '../assets/images/snickers.png';
import marshmallowImage from '../assets/images/marshmallow.png';

export const SWEETS_CATEGORY = {
  SWEET_TREATS: 'Sweet Treats',
  SOUR_MONSTERS: 'Sour Monsters',
  ALLTIME_CLASSICS: 'Alltime Classics',
};

const candyCane = {
  id: 1,
  name: 'Candy Cane',
  category: SWEETS_CATEGORY.SWEET_TREATS,
  image: {
    src: candyCaneImage,
    alt: 'Candy Cane',
  },
  price: 2.95,
  sale: null,
  currency: 'EUR',
};

const centerShockCola = {
  id: 2,
  name: 'Center Shock "Cola"',
  category: SWEETS_CATEGORY.SOUR_MONSTERS,
  image: {
    src: centerShockColaImage,
    alt: 'Center Shock "Cola"',
  },
  price: 0.15,
  sale: null,
  currency: 'EUR',
};

const centerShockCherry = {
  id: 3,
  name: 'Center Shock "Cherry"',
  category: SWEETS_CATEGORY.SOUR_MONSTERS,
  image: {
    src: centerShockCherryImage,
    alt: 'Center Shock "Cherry"',
  },
  price: 0.15,
  sale: 0.05,
  currency: 'EUR',
};

const snickers = {
  id: 4,
  name: 'Snickers 2-Pack',
  category: SWEETS_CATEGORY.ALLTIME_CLASSICS,
  image: {
    src: snickersImage,
    alt: 'Snickers 2-Pack',
  },
  price: 1.70,
  sale: null,
  currency: 'EUR',
};

const marshmallows = {
  id: 5,
  name: '15 Marshmallows',
  category: SWEETS_CATEGORY.SWEET_TREATS,
  image: {
    src: marshmallowImage,
    alt: '15 Marshmallows',
  },
  price: 0.99,
  sale: null,
  currency: 'EUR',
};

export default [
  candyCane,
  centerShockCola,
  centerShockCherry,
  snickers,
  marshmallows,
];
