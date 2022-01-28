import { PrinterInterface, PrinterModel, SupplyInterface } from '../utilities/interfaces';
import { modelOfPrinter } from '../utilities/types';
import { Pool } from 'mysql2';
import { db } from '../utilities/db';

class Printer implements PrinterModel {
  history: SupplyInterface[] = [];
  id: number;
  title: string;
  ip: string;
  model: modelOfPrinter;
  isMultifunctional: boolean;
  area: string;
  location: string;

  constructor(obj: PrinterInterface){
    this.id = obj.id;
    this.title = obj.title;
    this.ip = obj.ip;
    this.model = obj.model;
    this.isMultifunctional = obj.isMultifunctional;
    this.area = obj.area;
    this.location = obj.location;
  }

  static async getAll() {
    const [results] = await db.execute('SELECT * FROM `printers` JOIN `supplies` ON `printers`.`id` = `supplies`.`id`');
    return results;
  }

  static async getOne(ip: string): Promise<modelOfPrinter[]> {
    throw new Error('Method not implemented.');
  }
}

(async () => {
  const [results] = await db.execute('SELECT\n' +
      '    `printers`.*,\n' +
      '    `supplies`.`id` AS \'supplyId\',\n' +
      '    `supplies`.`supply`,\n' +
      '    `supplies`.`installedAt`\n' +
      'FROM\n' +
      '    `printers`\n' +
      'LEFT JOIN\n' +
      '    `supplies`\n' +
      'ON\n' +
      '    `printers`.`id` = `supplies`.`printerId`');
  console.log(results);
})();
