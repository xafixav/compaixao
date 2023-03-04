import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import NewAssistedSchema from '../../service/schema/newAssistedSchema';

export default class AssistedMiddleware {
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
				assistedNumber,
				cpf,
				livingState,
				name,
				bornAge,
				bornCity,
				bornState,
				jobProfession,
				gender,
				legsNumber,
				shirtNumber,
				shoesNumber  } = req.body;
  
			const { error } = NewAssistedSchema.defaultSchema.validate({
				assistedNumber,
				cpf,
				livingState,
				name,
				bornAge,
				bornCity,
				bornState,
				jobProfession,
				gender,
				legsNumber,
				shirtNumber,
				shoesNumber
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
				id,
				assistedNumber,
				cpf,
				livingState,
				name,
				bornAge,
				bornCity,
				bornState,
				jobProfession,
				gender,
				legsNumber,
				shirtNumber,
				shoesNumber 
			} = req.body;
  
			const { error } = NewAssistedSchema.updateSchema.validate({
				id,
				assistedNumber,
				cpf,
				livingState,
				name,
				bornAge,
				bornCity,
				bornState,
				jobProfession,
				gender,
				legsNumber,
				shirtNumber,
				shoesNumber
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
