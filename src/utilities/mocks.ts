import { PrinterInterface, SupplyInterface } from './interfaces';

export const printers: PrinterInterface[] = [
  {
    id: 1,
    title: 'mfp1',
    ip: '10.1.45.1',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.301',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 2,
    title: 'mfp2',
    ip: '10.1.45.2',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.302',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 3,
    title: 'mfp3',
    ip: '10.1.45.3',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.303',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 4,
    title: 'mfp4',
    ip: '10.1.45.4',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.304',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 5,
    title: 'mfp5',
    ip: '10.1.45.5',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.305',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 6,
    title: 'mfp6',
    ip: '10.1.45.6',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.306',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 7,
    title: 'mfp7',
    ip: '10.1.45.7',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.307',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 8,
    title: 'mfp8',
    ip: '10.1.45.8',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.308',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 9,
    title: 'mfp9',
    ip: '10.1.45.9',
    isMultifunctional: false,
    area: 'Biurowiec A',
    location: 'p.309',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 10,
    title: 'mfp10',
    ip: '10.1.45.10',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.310',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 11,
    title: 'mfp11',
    ip: '10.1.45.11',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.311',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 12,
    title: 'mfp12',
    ip: '10.1.45.12',
    isMultifunctional: false,
    area: 'Biurowiec A',
    location: 'p.312',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 13,
    title: 'mfp13',
    ip: '10.1.45.13',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.313',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 14,
    title: 'mfp14',
    ip: '10.1.45.14',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.314',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 15,
    title: 'mfp15',
    ip: '10.1.45.15',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.315',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 16,
    title: 'mfp16',
    ip: '10.1.45.16',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.316',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 17,
    title: 'mfp17',
    ip: '10.1.45.17',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.317',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 18,
    title: 'mfp18',
    ip: '10.1.45.18',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.318',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 19,
    title: 'mfp19',
    ip: '10.1.45.19',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.319',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 20,
    title: 'mfp20',
    ip: '10.1.45.20',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.320',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 21,
    title: 'mfp21',
    ip: '10.1.45.21',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.321',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 22,
    title: 'mfp22',
    ip: '10.1.45.22',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.322',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 23,
    title: 'mfp23',
    ip: '10.1.45.23',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.323',
    model: 'Xerox_VersaLink_C605',
  },
];

export const supplies: SupplyInterface[] = [
  { id:'01be160c-eee1-4ec8-a982-8053d40fac05',supply:'FUSER',code:'C400_7',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'070508e8-a169-4dad-93b1-9144956e1c49',supply:'TRANSFER KIT',code:'C605_10',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'2009bbd7-3aeb-452f-b7e7-a04170c9c90f',supply:'Yellow toner',code:'C8035_2',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'26407b37-44a6-4614-8c30-502d1a274483',supply:'Drummer - Magenta',code:'C605_7',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'35c41d19-d92e-4490-ae77-72587b4f38c3',supply:'Drummer',code:'C8035_5',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'3a14a067-403d-4dc7-a28f-867f9661f627',supply:'Drummer - Black',code:'C605_5',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'3b9f82a4-85d1-4e20-aa2c-b4fe9cf8178c',supply:'SBTR',code:'C8035_7',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'4bad1353-3068-4592-b76b-7a18511cd169',supply:'Cyan toner',code:'C400_4',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'4cf310fe-1446-46fe-9e2b-546372a7e2c4',supply:'Cyan toner',code:'C8035_4',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'59a866d3-c23a-4046-901b-a7fc880c91b1',supply:'Magenta toner',code:'C605_3',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'67f030df-7c90-40da-84dd-35846fff19aa',supply:'Belt cleaner',code:'C8035_8',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'6c901e70-7ee8-4179-b5d6-1fbd8bd18695',supply:'Waste toner',code:'C8035_6',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'7774c06b-cceb-409f-9bdd-ea9bea5933d9',supply:'Waste toner',code:'C400_5',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'a821f939-b3bc-4b35-b949-4acf825de6c6',supply:'IMAGING UNIT KI',code:'C400_8',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'ace69be4-8db1-491c-a80d-759ceb35f74e',supply:'Black toner',code:'C8035_1',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'b30d8d8d-2974-4a14-b91c-aaa09ff6496a',supply:'Black toner',code:'C400_1',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'c22587b2-79e2-4217-b2e4-d53d8f1c06b0',supply:'Black toner',code:'C605_1',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'c7aee27d-ad04-4a22-8c9f-2aa42da98e73',supply:'Yellow toner',code:'C605_2',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'d271d275-4d02-4958-b674-1c9cb9002524',supply:'Cyan toner',code:'C605_4',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'d6e1c2dc-e8f3-4701-a776-18238561cbe4',supply:'Drummer - Yellow',code:'C605_6',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'d78e9a58-2c82-4ec4-b9bc-ecb6ef0ec513',supply:'FUSER',code:'C605_11',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'da056de8-7d25-4326-a0ca-90cdab9ae4c2',supply:'Drummer - Cyan',code:'C605_8',isAvailable:'1',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'ee60f2dc-edec-4f2d-8cb9-0fb3ea352f59',supply:'FUSER',code:'C8035_9',isAvailable:'1',model:'Xerox_AltaLink_C8035',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }, { id:'f4235334-af55-4fae-b271-52422764e945',supply:'Magenta toner',code:'C400_3',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null },
  { id:'f4242084-aa40-4914-a41b-51ed5beefb89',supply:'TRANSFER KIT',code:'C400_6',isAvailable:'1',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:null,printerId:null }];

export const printersWithHistory: PrinterInterface[] = [
  {
    id: 1,
    title: 'mfp1',
    ip: '10.1.45.1',
    isMultifunctional: true,
    area: `Biurowiec B`,
    location: 'p.301',
    model: 'Xerox_AltaLink_C8035',
    history: [{ id:'01be160c-eee1-4ec8-a982-8053d40fac05',supply:'FUSER',code:'C400_7',isAvailable:'0',model:'Xerox_VersaLink_C400',storedAt:new Date('2022-01-23 00:00:00'),installedAt:new Date('2022-01-25 10:00:00'),printerId:1 },
      { id:'070508e8-a169-4dad-93b1-9144956e1c49',supply:'TRANSFER KIT',code:'C605_10',isAvailable:'0',model:'Xerox_VersaLink_C605',storedAt:new Date('2022-01-23 00:00:00'),installedAt:new Date('2022-01-30 15:00:00'),printerId:1 }],
  },
  {
    id: 2,
    title: 'mfp2',
    ip: '10.1.45.2',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.302',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 3,
    title: 'mfp3',
    ip: '10.1.45.3',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.303',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 4,
    title: 'mfp4',
    ip: '10.1.45.4',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.304',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 5,
    title: 'mfp5',
    ip: '10.1.45.5',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.305',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 6,
    title: 'mfp6',
    ip: '10.1.45.6',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.306',
    model: 'Xerox_AltaLink_C8035',
  },
  {
    id: 7,
    title: 'mfp7',
    ip: '10.1.45.7',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.307',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 8,
    title: 'mfp8',
    ip: '10.1.45.8',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.308',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 9,
    title: 'mfp9',
    ip: '10.1.45.9',
    isMultifunctional: false,
    area: 'Biurowiec A',
    location: 'p.309',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 10,
    title: 'mfp10',
    ip: '10.1.45.10',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.310',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 11,
    title: 'mfp11',
    ip: '10.1.45.11',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.311',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 12,
    title: 'mfp12',
    ip: '10.1.45.12',
    isMultifunctional: false,
    area: 'Biurowiec A',
    location: 'p.312',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 13,
    title: 'mfp13',
    ip: '10.1.45.13',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.313',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 14,
    title: 'mfp14',
    ip: '10.1.45.14',
    isMultifunctional: false,
    area: 'Biurowiec B',
    location: 'p.314',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 15,
    title: 'mfp15',
    ip: '10.1.45.15',
    isMultifunctional: false,
    area: 'terminal',
    location: 'p.315',
    model: 'Xerox_VersaLink_C400',
  },
  {
    id: 16,
    title: 'mfp16',
    ip: '10.1.45.16',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.316',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 17,
    title: 'mfp17',
    ip: '10.1.45.17',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.317',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 18,
    title: 'mfp18',
    ip: '10.1.45.18',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.318',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 19,
    title: 'mfp19',
    ip: '10.1.45.19',
    isMultifunctional: true,
    area: 'Biurowiec A',
    location: 'p.319',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 20,
    title: 'mfp20',
    ip: '10.1.45.20',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.320',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 21,
    title: 'mfp21',
    ip: '10.1.45.21',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.321',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 22,
    title: 'mfp22',
    ip: '10.1.45.22',
    isMultifunctional: true,
    area: 'terminal',
    location: 'p.322',
    model: 'Xerox_VersaLink_C605',
  },
  {
    id: 23,
    title: 'mfp23',
    ip: '10.1.45.23',
    isMultifunctional: true,
    area: 'Biurowiec B',
    location: 'p.323',
    model: 'Xerox_VersaLink_C605',
  },
];

