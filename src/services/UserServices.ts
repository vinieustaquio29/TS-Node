
export interface User{
 name: string,
 email: string   
}

const db = [
    {
        name: "kimberley",
        email: "kimberley@dio.com"
    }
]


export class UserService {

    db: User[]

    constructor (
        database = db
    ){
        this.db =database
    }
    


    createUser = (name: string, email: string) => {
        const User = {
            name,
            email
        }
    
        this.db.push(User)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

}