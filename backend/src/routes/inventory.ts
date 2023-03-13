import * as express from 'express';
import Controller from '../controller/inventory/inventory';
import Middleware from '../middleware/inventory/inventory';

const { create, getAll, update } = new Controller();
const { createIsValid, updateIsValid } = new Middleware();

const inventoryRouter = express.Router();

inventoryRouter
	.route('/inventory/register')
	.post(
		createIsValid,
		create,
	);

inventoryRouter
	.route('/inventory/getall')
	.get(
		getAll,
	);

inventoryRouter
	.route('/inventory/update')
	.get(
		updateIsValid,
		update,
	);


export default inventoryRouter;