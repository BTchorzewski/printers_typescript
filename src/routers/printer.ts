import express from 'express';

const printerRouter = express.Router();

// Controllers:
//   getPrintersPage,
//   createPrinterPage,
//   createPrinter,
//   updatePrinterPage,
//   updatePrinter,
//   deletePrinter,

const {
  getPrinterPage,
  getPrintersPage,
  supplyPrinter,
  createPrinterPage,
  createPrinter,
  updatePrinterPage,
  updatePrinter,
  deletePrinter,
} = require('../controllers/printer');

printerRouter.get('/printers', getPrintersPage);
printerRouter.get('/printers/:printerId', getPrinterPage);
printerRouter.post('/supply-printer', supplyPrinter);

printerRouter.get('/printers/create', createPrinterPage);
printerRouter.post('/printers/create', createPrinter);

printerRouter.get('/printers/update/:printerId', updatePrinterPage);
printerRouter.post('/printers/update', updatePrinter);

printerRouter.get('/printers/delete/:printerId', deletePrinter);

export { printerRouter };
