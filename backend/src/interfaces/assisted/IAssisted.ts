import INewAssisted from './INewAssisted';

interface IAssisted extends INewAssisted {
    id: number,
    createdAt?: number,
    updatedAt?: number,
}

export default IAssisted;