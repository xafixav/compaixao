export default class ErrorManager extends Error {
  public status: number;

  constructor(payload: { status: number, message: string }) {
    super(payload.message);
    this.status = payload.status;
  }
}