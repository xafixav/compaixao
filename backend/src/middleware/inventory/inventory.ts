import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Schema from '../../service/schema/inventory';

export default class InventoryMiddleware {
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
				type,
				gender,
				size,
				quantity, } = req.body;
  
			const { error } = Schema.defaultSchema.validate({ 
				type,
				gender,
				size,
				quantity, }, { convert: false });
  
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
				type,
				gender,
				size,
				quantity } = req.body;
  
			const { error } = Schema.defaultSchema.validate({
				id,
				type,
				gender,
				size,
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
