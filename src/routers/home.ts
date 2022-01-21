import { Router } from 'express';
import { homeController } from '../controllers/home';

export default Router().get('/', homeController);
