import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import RelationalInventory from '../../database/models/RelationalInventory';
import INewRelationalInventory from '../../interfaces/relationalInventory/INewRelationalInventory';
import IRelationalInventory from '../../interfaces/relationalInventory/IRelationalInventory';

export default class relationalInventoryService {

	private model: typeof RelationalInventory;

	private started: boolean;

	constructor() {
		this.model = RelationalInventory;
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public create = async (data: INewRelationalInventory): Promise<IRelationalInventory> => {
		try {
			this.start();

			const { 
				assistedId,
				inventoryId,
				quantity,
			} = data;

			const response = await this.model.create({ 
				assistedId,
				inventoryId,
				quantity,
			});
      
			if (response) {
				return response;
			}

			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.INVENTORY_CREATION_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};

	public getAll = async (): Promise<IRelationalInventory[]> => {
		try {
			this.start();

			const newAssisted = await this.model.findAll();

			if (newAssisted) {
				return newAssisted;
			}

			throw new ErrorManager({ status: StatusCodes.NOT_FOUND, message: ERROR_MESSAGES.NOT_FOUND });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};

	public update = async (data:IRelationalInventory): Promise<IRelationalInventory> => {
		try {
			this.start();

			const {
				id,
				assistedId,
				inventoryId,
				quantity,
			} = data;

			const newAssisted = await this.model.update({ 
				assistedId,
				inventoryId,
				quantity,
			},
			{ where: { id } }
			);

			if (newAssisted[0] > 0) {
				return data;
			}
			
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: ERROR_MESSAGES.INVENTORY_UPDATE_FAILURE });

		} catch (e: any) {
			throw new ErrorManager({ status: StatusCodes.BAD_REQUEST, message: e.message });
		}
	};
}
