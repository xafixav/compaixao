import INewInventory from './INewInventory';

interface IInventory extends INewInventory {
  id: number,
  createdAt: number,
  updatedAt: number,
}

export default IInventory;