export enum ModelsOfPrinters {
  Xerox_AltaLink_C8035,
  Xerox_VersaLink_C605,
  Xerox_VersaLink_C400,
}


export const isMultifunctionalPrinter = function(printer: ModelsOfPrinters): boolean {
  switch (printer) {
    case Printer.Xerox_AltaLink_C8035:
      return true;
    case Printer.Xerox_VersaLink_C605:
      return true;
    case Printer.Xerox_VersaLink_C400:
      return false;
    default:
      throw new Error('Invalid param - unrecognized printer');
  }
};

