// const moment = require('moment');
// const Warehouse = require('../models/warehouse');
// const { SUPPLIES } = require('../utilities/constants');

export const handlebarHelpers = {
  upper: (txt: string): string => txt.toUpperCase(),
  'format-price': (price: number): string => price.toFixed(2),
};