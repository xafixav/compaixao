import * as express from 'express';
import AssistedController from '../controller/assisted/assisted';
import AssistedMiddleware from '../middleware/assisted/assisted';

const { register, getAll } = new AssistedController();
const { newAssistedIsValid } = new AssistedMiddleware();

const assistedRouter = express.Router();

assistedRouter
	.route('/assisted/register')
	.post(
		newAssistedIsValid,
		register,
	);

assistedRouter
	.route('/assisted/getall')
	.get(
		getAll,
	);

export default assistedRouter;