import { Router } from 'express';
import { homeController } from '../controllers/home';


// const homeController = require('../controllers/home');

const homeRouter = Router();
export default homeRouter.get('/', homeController);

