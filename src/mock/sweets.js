import candyCaneImage from '../assets/images/candy-cane.png';

export const SWEETS_CATEGORY = {
  SWEET_TREATS: 'Sweet Threads',
};

export const candyCane = {
  id: 1,
  name: 'Candy Cane',
  category: SWEETS_CATEGORY.SWEET_TREATS,
  image: {
    src: candyCaneImage,
    alt: 'Candy Cane',
  },
  price: 2.95,
  sale: null,
};

export default [
  candyCane,
];
