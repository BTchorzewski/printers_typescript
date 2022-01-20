import {Request, Response} from 'express';
import {PrinterInterface} from '../interfaces/interfaces';

// import Printer from '../models/printer';
// import Supply from '../models/supply';
// import { SUPPLIES } from '../utilities/constants';
import {isMultifunctionalPrinter, ModelsOfPrinters} from '../utilities/utilities';


const getPrintersPage = async (req:Request, res:Response) => {
  const printers: PrinterInterface[] = [
    { id:'1515',
      ip:'asd',
      area: 'tak',
      model: ModelsOfPrinters.Xerox_AltaLink_C8035,
      title:'ads',
      multifunctional: true,
      location:'adsads',
    },
  ];
  try {
    // printers = await Printer.find().lean();
  } catch (e) {
    throw new Error('DB error');
  }
  res.render('pages/printers/printers', { printers });
};

const getPrinterPage = async (req, res) => {
  const { printerId } = req.params;
  const printer;
  try {
    // const printer = await Printer.findById(printerId).populate('history').lean();
    // if (!printer) throw new Error('a printer not found');
    //
    // const suppliesForPrinter = SUPPLIES.filter((supply) => supply.printer === printer.model);
    // for (const suppliesForPrinterKey of suppliesForPrinter) {
    //   const available = await Supply.find({ $and: [{ code: suppliesForPrinterKey.code }, { available: true }] }).count();
    //   suppliesForPrinterKey.av = !available;
    // }

    res.render('pages/printers/printer', { printer, suppliesForPrinter });
  } catch (e) {
    res.send(`Something wrong: ${e}`);
  }
};

const supplyPrinter = async (req, res) => {
  const { printerId, code } = req.body;
  try {
    const availableSupply = await Supply.findOne({ $and: [{ code }, { available: true }] });
    const printer = await Printer.findById(printerId);

    if (availableSupply === null || printer === null) throw new Error('Printer or supply not find');

    printer.history.push(availableSupply._id);
    availableSupply.dateOutAt = new Date().toDateString();
    availableSupply.installedIn = printer._id;
    availableSupply.available = false;
    await printer.save();
    await availableSupply.save();
    res.redirect(`/printers/${printerId}`);
  } catch (e) {
    // @todo add error page.
    console.log('Ups somethig wrong in supply printer', e);
    res.redirect('/');
  }
};

const createPrinterPage = (req, res) => {
  res.render('pages/printers/create-printer-page');
};

const createPrinter = async (req, res) => {
  const {
    title,
    ip,
    model,
    location,
  } = req.body;

  const newPrinter = new Printer({
    title,
    ip,
    model,
    location,
    multifunctional: isMultifunctionalPrinter(model),
  });

  try {
    const p = await newPrinter.save();
    console.log('printer saved', p);
    res.redirect('/printers');
  } catch (e) {
    console.log('something wrong', e);
  }
};

const updatePrinterPage = async (req, res) => {
  const { printerId } = req.params;
  const printer = await Printer.findById(printerId).lean();
  if (!printer) {
    throw new Error('A printer not found.');
  }
  console.log(printer);
  res.render('pages/printers/update-printer-page', { printer });
};

const updatePrinter = async (req, res) => {
  const {
    printerId,
    title,
    ip,
    model,
    location,
  } = req.body;

  try {
    await Printer.findByIdAndUpdate(printerId, {
      title,
      ip,
      model,
      location,
      multifunctional: isMultifunctionalPrinter(model),
    });
    console.log('printer updated');
    res.redirect('/printers');
  } catch (e) {
    console.log('something wrong', e);
  }
};

const deletePrinter = async (req, res) => {
  const { printerId } = req.params;
  await Printer.findByIdAndDelete(printerId);
  res.redirect('/printers');
};

module.exports = {
  getPrinterPage,
  getPrintersPage,
  supplyPrinter,
  createPrinterPage,
  createPrinter,
  updatePrinterPage,
  updatePrinter,
  deletePrinter,
};
