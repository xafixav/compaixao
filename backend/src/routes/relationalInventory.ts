import * as express from 'express';
import Controller from '../controller/relationalInventory/relationalInventory';
import Middleware from '../middleware/relationalInventory/relationalInventory';

const { create, getAll, update } = new Controller();
const { createIsValid, updateIsValid } = new Middleware();

const relationalInventoryRouter = express.Router();

relationalInventoryRouter
	.route('/inventory/relational/create')
	.post(
		createIsValid,
		create,
	);

relationalInventoryRouter
	.route('/inventory/relational/getall')
	.get(
		getAll,
	);

relationalInventoryRouter
	.route('/inventory/relational/update')
	.post(
		updateIsValid,
		update,
	);

export default relationalInventoryRouter;