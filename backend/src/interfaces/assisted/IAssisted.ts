import INewAssisted from "./INewAssisted";

export default interface IAssisted extends INewAssisted {
    id: number,
    createdAt: number,
    updatedAt: number,
}