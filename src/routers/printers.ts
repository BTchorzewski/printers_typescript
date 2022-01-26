import { Router } from 'express';

import {
  createPrinter,
  createPrinterPage, deletePrinter,
  getPrinterPage,
  getPrintersPage,
  supplyPrinter, updatePrinter,
  updatePrinterPage,
} from '../controllers/printer';

const printerRouter = Router();
// @todo add routers to manage printer: add, modify, supply, delete.
printerRouter.get('/printers', getPrintersPage);
printerRouter.get('/printers/:printerId', getPrinterPage);
printerRouter.post('/supply-printer', supplyPrinter);
printerRouter.get('/printers/create', createPrinterPage);
printerRouter.post('/printers/create', createPrinter);
printerRouter.get('/printers/update/:printerId', updatePrinterPage);
printerRouter.post('/printers/update', updatePrinter);
printerRouter.get('/printers/delete/:printerId', deletePrinter);

export { printerRouter };
