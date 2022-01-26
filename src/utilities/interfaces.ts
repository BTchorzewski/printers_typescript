import { modelOfPrinter } from './types';

export interface BasicSupplyInterface {
  supply:string;
  code: string;
  model:modelOfPrinter;
}

export interface SupplyInterface extends BasicSupplyInterface{
  id: string;
  supply:string;
  code: string;
  isAvailable: string;
  model:modelOfPrinter;
  storedAt: Date;
  installedAt: Date | null;
  printerId: number | null;
}

export interface PrinterInterface {
  id: number;
  title: string;
  ip: string;
  model: modelOfPrinter;
  isMultifunctional: boolean;
  area: string;
  location: string;
  history? : SupplyInterface[];
}

export interface DbConfig {
  host: string;
  user: string;
  database: string;
  password: string;
}