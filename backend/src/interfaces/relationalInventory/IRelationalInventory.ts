import INewRelationalInventory from './INewRelationalInventory';

interface IRelationalInventory extends INewRelationalInventory {
  id: number;
  createdAt: number,
  updatedAt: number,
}

export default IRelationalInventory;