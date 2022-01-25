import { Request, Response } from 'express';
import { printers } from '../utilities/mocks';
export const getPrintersPage = async (req:Request, res:Response) => {
  res.render('pages/printers/printers-page', { printers });
};

export const getPrinterPage = async (req:Request, res:Response) => {};

export const supplyPrinter = async (req:Request, res:Response) => {};

export const createPrinterPage = (req:Request, res:Response) => {};

export const createPrinter = async (req:Request, res:Response) => {};

export const updatePrinterPage = async (req:Request, res:Response) => {};

export const updatePrinter = async (req:Request, res:Response) => {};

export const deletePrinter = async (req:Request, res:Response) => {};
