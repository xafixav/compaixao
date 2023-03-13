import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ComentaryService } from '../../service/comentary';

export default class ComentaryController {

	private ComentaryService: typeof ComentaryService;

	constructor() {
		this.ComentaryService = ComentaryService;
	}

	public create = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { assistedId, comentary, prayer } = req.body;

			const assistedResponse = await this.ComentaryService.create({ assistedId, comentary, prayer });

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};

	public getAll = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const { id } = req.params;

			const idParsed = Number(id);

			const assistedResponse = await this.ComentaryService.getAll(idParsed);

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};

	public update = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const { id, assistedId, comentary, prayer } = req.body;

			const assistedResponse = await this.ComentaryService.update({ id, assistedId, comentary, prayer });

			if (assistedResponse) {
				return res.status(StatusCodes.OK).json(assistedResponse);
			}

		} catch (e) {
			next(e);
		}
	};
}