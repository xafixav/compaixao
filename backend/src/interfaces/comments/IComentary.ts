import INewComentary from './INewComentary';

interface IComentary extends INewComentary{
  id: number,
  createdAt: number,
  updatedAt: number,
}

export default IComentary;