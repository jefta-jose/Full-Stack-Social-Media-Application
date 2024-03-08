import {Router} from 'express';
import {getAllUsersController} from '../controllers/usersControllers.js'
import logger from '../utils/Logger.js';

const userRouter=Router();

userRouter.get('/users' ,getAllUsersController )

export default userRouter;