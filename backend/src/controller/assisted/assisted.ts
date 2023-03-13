import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AssistedService } from '../../service/assisted/index';

export default class AssistedController {
	private assistedService: typeof AssistedService;

	constructor() {
		this.assistedService = AssistedService;
	}

	public register = async (req: Request, res: Response, next: NextFunction) => {
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
				sleepOver,
				shoesNumber
			} = req.body;

			const assistedResponse = await this.assistedService.create({ 
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
				sleepOver,
				shoesNumber
			});

			if (assistedResponse) {
				return res.status(StatusCodes.CREATED).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};

	public getAll = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const assistedResponse = await this.assistedService.getAll();

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
				sleepOver,
				shoesNumber
			} = req.body;

			const assistedResponse = await this.assistedService.update({
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
				sleepOver,
				shoesNumber
			});

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};
}