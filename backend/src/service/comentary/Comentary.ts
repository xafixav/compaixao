import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import IComentary from '../../interfaces/comments/IComentary';
import Comentary from '../../database/models/Comentary';
import INewComentary from '../../interfaces/comments/INewComentary';

export default class ComentaryService {

	private model: typeof Comentary;

	private started: boolean;

	constructor() {
		this.model = Comentary;
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public create = async (data: INewComentary): Promise<IComentary> => {
		try {
			this.start();

			const { 
				assistedId,
				comentary
			} = data;

			const response = await this.model.create({ 
				assistedId,
				comentary
			});
      
			if (response) {
				return response;
			}

			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};

	public getAll = async (assistedId: number): Promise<Comentary[]> => {
		try {
			this.start();

			const newAssisted = await this.model.findAll({ where: { assistedId }});

			if (newAssisted) {
				return newAssisted;
			}

			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};

	public update = async (data:IComentary): Promise<IComentary> => {
		try {
			this.start();

			const {
				id,
				assistedId,
				comentary,
			} = data;

			const newAssisted = await this.model.update({ 
				id,
				assistedId,
				comentary,
			},
			{ where: { id } }
			);

			if (newAssisted[0] > 0) {
				return data;
			}
			
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.ASSISTED_REGISTER_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};
}
