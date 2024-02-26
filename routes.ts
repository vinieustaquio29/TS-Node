import { Router} from "express";
import { UseController } from "./src/Controllers/UseController";


export const router = Router();

const userController = new UseController()


router.post('/user', userController.createUSer)
router.get('/user', userController.getAllUsers)