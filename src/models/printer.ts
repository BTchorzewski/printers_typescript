import { PrinterInterface, PrinterModel, SupplyInterface } from '../utilities/interfaces';
import { modelOfPrinter } from '../utilities/types';
import { printer } from '../utilities/mocks';
import { Pool, RowDataPacket } from 'mysql2';
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
    this.id = null ?? obj.id;
    this.title = obj.title;
    this.ip = obj.ip;
    this.model = obj.model;
    this.isMultifunctional = obj.isMultifunctional;
    this.area = obj.area;
    this.location = obj.location;
  }
  save() {
    return printer;
  }
  delete() {
    console.log('Printer deleted');
  }

  static async findAll() {
    const [results] = await db.execute('SELECT\n' +
        '`printers`.*,\n' +
        'JSON_ARRAYAGG(JSON_OBJECT(\'id\',`supplies`.`id`,\n' +
        '\'supply\',`supplies`.`supply`,\n' +
        '\'code\',`supplies`.`code`,\n' +
        '\'isAvailable\',`supplies`.`isAvailable`,\n' +
        '\'model\',`supplies`.`model`,\n' +
        '\'storedAt\',`supplies`.`storedAt`,\n' +
        '\'installedAt\',`supplies`.`installedAt`,\n' +
        '\'printerId\',`supplies`.`printerId`)) AS history\n' +
        'FROM\n' +
        '`printers`\n' +
        'left join `supplies` ON\n' +
        '`printers`.`id` = `supplies`.`printerId`\n' +
        'GROUP BY `printers`.`id` ');

    const printers = results as PrinterInterface[];
    const clearedPrinters = printers.map((el) => {
      if(el.history[0].code === null) el.history = [];
      return new Printer(el);
    });
    return clearedPrinters;
  }


  static async findById(id: number) {

  }
}

(async () => {

})();
