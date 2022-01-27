import { PrinterInterface, PrinterModel, SupplyInterface } from '../utilities/interfaces';
import { modelOfPrinter } from '../utilities/types';
import { Pool } from 'mysql2';
import { db } from '../utilities/db';

// class Printer implements PrinterModel {
//   public history: SupplyInterface[] = [];
//   private DB = db;
//   constructor(){}
//
// }

(async () => {
 const results =  await db.execute('SELECT\n' +
     '`supply`,\n' +
     'COUNT(`supply`) as total,\n' +
     '    SUM(\n' +
     '        CASE WHEN `isAvailable` = 1 THEN 1 ELSE 0 END\n' +
     '    ) AS numberOfAvailable,\n' +
     '    sum(\n' +
     '        CASE WHEN `isAvailable` = 0 THEN 1 ELSE 0 END\n' +
     '    ) AS numberOfNotAvailable\n' +
     '\n' +
     'FROM\n' +
     '    `supplies`\n' +
     'WHERE\n' +
     '    `model` = "Xerox_AltaLink_C8035"\n' +
     '    GROUP BY `supply`')
  console.log(results)
})();
