import * as express from 'express';
import Controller from '../controller/comentary/comentary';
import Middleware from '../middleware/comentary/comentary';

const { create, getAll, update } = new Controller();
const { createIsValid, updateIsValid } = new Middleware();

const comentaryRouter = express.Router();

comentaryRouter
	.route('/assisted/comentary/register')
	.post(
		create,
	);

comentaryRouter
	.route('/assisted/comentary/:id')
	.get(
		getAll,
	);

comentaryRouter
	.route('/assisted/comentary/update')
	.post(
		update,
	);

export default comentaryRouter;