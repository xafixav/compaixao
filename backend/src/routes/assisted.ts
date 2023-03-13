import * as express from 'express';
import Controller from '../controller/assisted/assisted';
import Middleware from '../middleware/assisted/assisted';

const { register, getAll, update } = new Controller();
const { createIsValid, updateIsValid } = new Middleware();

const assistedRouter = express.Router();

assistedRouter
	.route('/assisted/register')
	.post(
		register,
	);

assistedRouter
	.route('/assisted/getall')
	.get(
		getAll,
	);

assistedRouter
	.route('/assisted/update')
	.post(
		update,
	);

export default assistedRouter;