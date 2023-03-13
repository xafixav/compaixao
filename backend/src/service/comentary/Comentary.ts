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
				comentary,
				prayer
			} = data;

			const response = await this.model.create({ 
				assistedId,
				comentary,
				prayer
			});
      
			if (response) {
				return response;
			}

			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.COMENTARY_CREATION_FAILURE });

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

			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.NOT_FOUND });

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
				prayer,
			} = data;

			const newAssisted = await this.model.update({ 
				assistedId,
				comentary,
				prayer,
			},
			{ where: { id } }
			);

			if (newAssisted[0] > 0) {
				return data;
			}
			
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.COMENTARY_UPDATE_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};
}
