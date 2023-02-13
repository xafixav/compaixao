import * as express from 'express';
import AssistedController from '../controller/assisted';

const { register } = new AssistedController();

const assistedRouter = express.Router();

assistedRouter
  .route('/assisted/register')
  .post(
    register,
  );

export default assistedRouter;