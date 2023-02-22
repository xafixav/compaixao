import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import Assisted from '../../database/models/Assisted';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import INewAssisted from '../../interfaces/assisted/INewAssisted';
import IAssisted from '../../interfaces/assisted/IAssisted';

export default class AssistedService {

	private assistedModel = Assisted;

	private started: boolean;

	constructor() {
		this.assistedModel = Assisted;
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public register = async (data: INewAssisted): Promise<IAssisted> => {
		try {
			this.start();

			const { assistedId, cpf, livingState, name, bornAge, bornCity, bornState, jobProfession } = data;

			const newAssisted = await this.assistedModel.create({ assistedId, cpf, livingState, name, bornAge, bornCity, bornState, jobProfession });
      
			if (newAssisted) {
				return newAssisted;
			}
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};

	public getAll = async (): Promise<IAssisted[]> => {
		try {
			this.start();

			const newAssisted = await this.assistedModel.findAll();
			if (newAssisted) {
				return newAssisted;
			}
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};
}
