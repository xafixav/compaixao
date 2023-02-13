import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import Assisted from '../../database/models/Assisted';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import INewAssisted from '../../interfaces/INewAssisted';
import IAssisted from '../../interfaces/IAssisted';
import Validations from './Validations';
import { ValidationsService } from '.';

export default class AssistedService {

  private userModel = Assisted;

  private started: boolean;

  private validations = ValidationsService

  constructor() {
    this.userModel = Assisted;
    this.validations = ValidationsService;
    this.started = false;
  }

  private start = () => {
    if (!this.started) {
      this.validations = ValidationsService;
      this.started = true;
    }
  }

  public register = async (data: INewAssisted): Promise<IAssisted> => {
    try {
      this.start();

      const { assistedId, cpf, description, livingState, name, rg } = data;

      this.validations.isNewAssistedValid(data)

      const newAssisted = await this.userModel.create({assistedId, cpf, description, livingState, name, rg});
      if (newAssisted) {
        return newAssisted;
      }
      throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

    } catch (e: any) {
      throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
    }
  };
}
