import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import NewAssistedSchema from '../../service/schema/newAssistedSchema';

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

	public newAssistedIsValid = (req: Request, res: Response, next: NextFunction) => {
		try {
			const { assistedId, cpf, livingState, name, bornAge, bornCity, bornState, jobProfession } = req.body;
  
			const { error } = NewAssistedSchema.defaultSchema.validate({
				assistedId, cpf, livingState, name, bornAge, bornCity, bornState, jobProfession
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
