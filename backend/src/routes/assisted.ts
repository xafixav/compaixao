import * as express from 'express';
import Controller from '../controller/assisted/assisted';
import Middleware from '../middleware/assisted/assisted';

const { register, getAll, update } = new Controller();
const { createIsValid, updateIsValid } = new Middleware();

const assistedRouter = express.Router();

assistedRouter
	.route('/assisted/register')
	.post(
		createIsValid,
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
		updateIsValid,
		update,
	);

export default assistedRouter;