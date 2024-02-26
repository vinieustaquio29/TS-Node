import {Request, Response}  from "express";
import { UserService } from "../services/UserServices";




export class UseController {
    createUSer = (request: Request, response: Response) => {
        const userService = new UserService()
        const user = request.body

        if(!user.name) {
            return response.status(400).json({message: 'Bad request: name invalid'})
        }


        userService.createUser(user.name, user.email)
        return response.status(201).json({message: 'usuario criado'})
    
    }

    getAllUsers = (request: Request, response: Response) => {
        const userService = new UserService()
        const users = userService.getAllUsers()
        return response.status(200).json(users)
    }
}