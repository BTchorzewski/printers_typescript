import { modelOfPrinter } from './types';

export interface SupplyInterface {
  supply: string;
  model: modelOfPrinter;
  code: string;
}

export interface PrinterInterface {
  id: string;
  title: string;
  ip: string;
  model: modelOfPrinter;
  multifunctional: boolean;
  area: string;
  location: string;
}
