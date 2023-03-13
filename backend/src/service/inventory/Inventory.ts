import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';
import ErrorManager from '../ErrorManager';
import ERROR_MESSAGES from '../ErrorMessages';
import Inventory from '../../database/models/Inventory';
import INewInventory from '../../interfaces/inventory/INewInventory';
import IInventory from '../../interfaces/inventory/IInventory';

export default class InventoryService {

	private model: typeof Inventory;

	private started: boolean;

	constructor() {
		this.model = Inventory;
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public create = async (data: INewInventory): Promise<IInventory> => {
		try {
			this.start();

			const { 
				type,
				gender,
				size,
				quantity,
			} = data;

			const response = await this.model.create({ 
				type,
				gender,
				size,
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

	public getAll = async (): Promise<IInventory[]> => {
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

	public update = async (data:IInventory): Promise<IInventory> => {
		try {
			this.start();

			const {
				id,
				type,
				gender,
				size,
				quantity,
			} = data;

			const newAssisted = await this.model.update({ 
				type,
				gender,
				size,
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
