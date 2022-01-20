import express from 'express';

import { body } from 'express-validator';

const warehouseRouter = express.Router();

const { getWarehousePage, addSupply, removeSupply } = require('../controllers/warehouse');

warehouseRouter.get('/warehouse', getWarehousePage);
// @todo change error msg.
warehouseRouter.post('/add-supply', body('quantity')
  .isInt({ max: 10 })
  .withMessage('Value must be number.'), addSupply);

// @todo add validation
warehouseRouter.post('/remove-supply', removeSupply);

export { warehouseRouter };
