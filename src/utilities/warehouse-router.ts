export const validMaxNumberItemsToAdd = (param: number, max: number): void => {
  if (param > max) throw new Error('Can\'t add more than 10 items');
};
