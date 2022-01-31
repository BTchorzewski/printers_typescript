import { modelOfPrinter } from './types';
import { Pool } from 'mysql2';

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
  id?: number | undefined;
  title: string;
  ip: string;
  model: modelOfPrinter;
  isMultifunctional: boolean;
  area: string;
  location: string;
  history? : SupplyInterface[];
  create(): Promise<PrinterInterface>;
  delete(): Promise<void>;
  update(): Promise<void>;
}


export interface DbConfig {
  host: string;
  user: string;
  database: string;
  password: string;
}
