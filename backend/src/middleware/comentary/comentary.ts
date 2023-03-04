import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Schema from '../../service/schema/newComentarySchema';

export default class ComentaryMiddleware {
	private started: boolean;

	constructor() {
		this.started = false;
	}

	private start = () => {
		if (!this.started) {
			this.started = true;
		}
	};

	public newAssistedIsValid = (req: Request, res: Response, next: NextFunction) => {
		try {
			const { 
				assistedId, comentary
			} = req.body;
  
			const { error } = Schema.defaultSchema.validate({
				assistedId, comentary
			}, { convert: false });
			
			if (error) {
				const [StatusCode, ErrorMessage] = error.details[0].message.split('|');
				return res.status(Number(StatusCode)).json({ message: ErrorMessage });
			}
  
			next();

		} catch(e: any) {
			return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
		}
	};

	public updateAssistedIsValid = (req: Request, res: Response, next: NextFunction) => {
		try {
			const { 
				id, assistedId, comentary
			} = req.body;
  
			const { error } = Schema.updateSchema.validate({
				id, assistedId, comentary
			}, { convert: false });
			
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
