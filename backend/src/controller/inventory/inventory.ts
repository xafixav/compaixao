import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { InventoryService } from '../../service/inventory';

export default class InventoryController {

	private InventoryService: typeof InventoryService;

	constructor() {
		this.InventoryService = InventoryService;
	}

	public create = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { 
				type,
				gender,
				size,
				quantity,
			} = req.body;

			const assistedResponse = await this.InventoryService.create({ type,
				gender,
				size,
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
			const assistedResponse = await this.InventoryService.getAll();

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
				type,
				gender,
				size,
				quantity,
			} = req.body;

			const assistedResponse = await this.InventoryService.update({
				type,
				id,
				gender,
				size,
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