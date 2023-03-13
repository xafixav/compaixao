import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Schema from '../../service/schema/relationalInventory';

export default class RelationalInventoryMiddleware {
	private started: boolean;

	constructor() {
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public createIsValid = (req: Request, res: Response, next: NextFunction) => {
		try {
			const { 
				assistedId,
				inventoryId,
				quantity } = req.body;
  
			const { error } = Schema.defaultSchema.validate({ 
				assistedId,
				inventoryId,
				quantity }, { convert: false });
  
			if (error) {
				const [StatusCode, ErrorMessage] = error.details[0].message.split('|');
				return res.status(Number(StatusCode)).json({ message: ErrorMessage });
			}
  
			next();

		} catch(e: any) {
			return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
		}
	};

	public updateIsValid = (req: Request, res: Response, next: NextFunction) => {
		try {
			const {
				id,
				assistedId,
				inventoryId,
				quantity } = req.body;
  
			const { error } = Schema.defaultSchema.validate({
				id,
				assistedId,
				inventoryId,
				quantity }, { convert: false });
  
			if (error) {
				const [StatusCode, ErrorMessage] = error.details[0].message.split('|');
				return res.status(Number(StatusCode)).json({ message: ErrorMessage });
			}
  
			next();

		} catch(e: any) {
			return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
		}
	};
}
