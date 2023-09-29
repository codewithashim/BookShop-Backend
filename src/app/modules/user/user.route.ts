import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { createUserValidator } from './user.validation';

const router = express.Router();

router.post(
  '/create-user',
  UserController.createUser
);

router.get('/email/:email', UserController.getUserByEmail);
router.get('/id/:id', UserController.getUserById);
router.get('/', UserController.getAllUsers);

// == Get admin form the user by email and is admin true  == user.route.ts

router.get('/admin/:email', UserController.getAdminByEmail);

export const UserRoutes = router;
