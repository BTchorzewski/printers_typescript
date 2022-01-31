import { PrinterInterface, SupplyInterface } from '../utilities/interfaces';
import { modelOfPrinter } from '../utilities/types';
import { ResultSetHeader } from 'mysql2';
import { db } from '../utilities/db';

class Printer {
  history?: SupplyInterface[] = [];
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

  async delete(): Promise<void> {
    const [results] = await db.execute('INSERT INTO `printers`(`title`, `ip`, `isMultifunctional`, `area`, `location`, `model`) VALUES (?,?,?,?,?,?)',
        [this.title, this.ip, this.isMultifunctional, this.area, this.location, this.model]);
    const { affectedRows } = results as ResultSetHeader;
    if(affectedRows !== 1) throw new Error('Deleting row has failed');
  }

  async update(): Promise<void> {
    const [results] = await db.execute('UPDATE `printers` SET `title`=?,`ip`=?,`isMultifunctional`=?,`area`=?,`location`=?,`model`=? WHERE `printers`.`id` = ?',
        [this.title, this.ip, this.isMultifunctional, this.area, this.location, this.model, this.id]);
    const { affectedRows } = results as ResultSetHeader;
    if(affectedRows !== 1) throw new Error('Updating row has failed');
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
    return printers.map((el) => {
      if(el.history[0].code === null) el.history = [];
      return new Printer(el);
    }) as unknown as PrinterInterface[];
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

})();
