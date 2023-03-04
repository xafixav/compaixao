import * as express from 'express';
import AssistedController from '../controller/assisted/assisted';
import AssistedMiddleware from '../middleware/assisted/assisted';

const { register, getAll, update } = new AssistedController();
const { newAssistedIsValid, updateAssistedIsValid } = new AssistedMiddleware();

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

assistedRouter
	.route('/assisted/update')
	.get(
		updateAssistedIsValid,
		update,
	);

export default assistedRouter;