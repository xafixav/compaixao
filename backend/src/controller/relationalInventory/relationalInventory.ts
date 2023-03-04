import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RelationalInventoryService } from '../../service/relationalInventory';

export default class relationalInventoryController {

	private RelationalInventory: typeof RelationalInventoryService;

	constructor() {
		this.RelationalInventory = RelationalInventoryService;
	}

	public create = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { 
				assistedId,
				inventoryId,
				quantity,
			} = req.body;

			const assistedResponse = await this.RelationalInventory.create({ 
				assistedId,
				inventoryId,
				quantity,
			});

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};

	public getAll = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const assistedResponse = await this.RelationalInventory.getAll();

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};

	public update = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const { 
				id,
				assistedId,
				inventoryId,
				quantity,
			} = req.body;

			const assistedResponse = await this.RelationalInventory.update({
				id,
				assistedId,
				inventoryId,
				quantity,
			});

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};
}