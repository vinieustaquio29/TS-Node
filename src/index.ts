import  Express, {Request, Response}  from "express";
import {router} from "../routes"



const server = Express();

server.use(Express.json())
server.use(router)

server.get('/', (request: Request, response: Response) => {
    return response.status(200).json({message: "dioBank API"})

})


server.listen(5000, () => console.log('server on '))




