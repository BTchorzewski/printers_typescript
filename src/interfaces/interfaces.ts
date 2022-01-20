import { ModelsOfPrinters } from '../utilities/utilities';
export interface BasicSupply {
  supply: string;
  printer: ModelsOfPrinters;
  code: string;
}

export interface PrinterInterface {
  id: string;
  title: string;
  ip: string;
  model: ModelsOfPrinters;
  multifunctional: boolean;
  area: string;
  location: string;
}
