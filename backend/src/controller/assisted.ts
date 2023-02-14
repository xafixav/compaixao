import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AssistedService } from '../service/assisted/index';

export default class AssistedController {
  private assistedService: typeof AssistedService;

  constructor() {
    this.assistedService = AssistedService;
  }

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { assistedId, cpf, description, livingState, name, rg } = req.body;

      const assistedResponse = await this.assistedService.register({ assistedId, cpf, description, livingState, name, rg });

      if (assistedResponse) {
        return res.status(StatusCodes.OK).json(assistedResponse);
      }

    } catch (e) {
      next(e);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const assistedResponse = await this.assistedService.getAll();

      if (assistedResponse) {
        return res.status(StatusCodes.OK).json(assistedResponse);
      }

    } catch (e) {
      next(e);
    }
  };
}