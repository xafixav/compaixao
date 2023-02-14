import * as express from 'express';
import AssistedController from '../controller/assisted';

const { register, getAll } = new AssistedController();

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

export default assistedRouter;