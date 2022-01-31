import { PrinterInterface, PrinterModel, SupplyInterface } from '../utilities/interfaces';
import { modelOfPrinter } from '../utilities/types';
import { printer } from '../utilities/mocks';
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2';
import { db } from '../utilities/db';

class Printer {
  history: SupplyInterface[] = [];
  id: number | undefined;
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

  async create(): Promise<PrinterInterface> {
    if(this.id !== undefined) throw new Error('Can\'t create printer with id. Id param is forbidden');
    const [results] = await db.execute('INSERT INTO `printers`(`title`, `ip`, `isMultifunctional`, `area`, `location`, `model`) VALUES (?,?,?,?,?,?)',
        [this.title, this.ip, this.isMultifunctional, this.area, this.location, this.model]);
    const { insertId } = results as ResultSetHeader;
    console.log(insertId);
    this.id = insertId;
    return new Printer(this);
  }

  delete() {
    console.log('Printer deleted');
  }

  static async findAll(): Promise<PrinterInterface[] | null> {
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
    }) as unknown as PrinterInterface[];
    return clearedPrinters;
  }


  static async findById(id: number): Promise<PrinterInterface | null> {
    // tslint:disable-next-line:no-shadowed-variable
    const [[printer]] = await db.execute('SELECT\n' +
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
        '`printers`.`id` = `supplies`.`printerId` \n' +
        'WHERE `printers`.`id` = ?',[id]) as unknown as Array<PrinterInterface[]>;
    // tslint:disable-next-line:no-shadowed-variable
    if(printer.id=== null) return null;
    // @ts-ignore
    return new Printer(printer);
  }
}

(async () => {
  const r = new Printer({
    title: 'hello',
    ip:'10.1.1.1',
    model:'Xerox_VersaLink_C400',
    isMultifunctional: true,
    area:'tom',
    location: 'gt',
  });
  const d = await r.create();
  console.log(d);
})();
