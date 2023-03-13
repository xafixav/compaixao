import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Schema from '../../service/schema/assisted';

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

	public createIsValid = (req: Request, res: Response, next: NextFunction) => {
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
  
			const { error } = Schema.defaultSchema.validate({
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
				console.log(error);
				const [StatusCode, ErrorMessage] = error.details[0].message.split('|');
				return res.status(StatusCodes.BAD_REQUEST).json({ message: ErrorMessage || error.details[0].message });
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
  
			const { error } = Schema.updateSchema.validate({
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
				return res.status(StatusCodes.BAD_REQUEST).json({ message: ErrorMessage || error.details[0].message });
			}
  
			next();

		} catch(e: any) {
			return res.status(StatusCodes.BAD_REQUEST).json({ message: e.message });
		}
	};
}
