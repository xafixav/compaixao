import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import Assisted from '../../database/models/Assisted';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import INewAssisted from '../../interfaces/INewAssisted';
import IAssisted from '../../interfaces/IAssisted';

export default class ValidationsService {

  private userModel;

  private started: boolean;

  constructor() {
    this.userModel = Assisted;
    this.started = false;
  }

  private start = () => {
    if (!this.started) {
      this.started = true;
    }
  }

  public isNewAssistedValid = (data: INewAssisted): boolean => {
    try {
      this.start();

      const { assistedId, cpf, description, livingState, name, rg } = data;

      if (!cpf && !rg) {
        throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.CPF_AND_RG_MISSING });
      }

      if (!assistedId) {
        throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_ID_MISSING });
      }

      if (!name) {
        throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_NAME_MISSING });
      }

      if (!livingState) {
        throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_NAME_MISSING });
      }

      return false;

    } catch (e: any) {
      throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
    }
  };
}
