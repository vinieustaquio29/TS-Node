import { User, UserService } from "./UserServices"

describe('Uerservice', () =>{
    const mockDB: User[] = []
    const userService = new UserService(mockDB);

    

    it('Deve adicionar um novo usuario', () =>{
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('vini', 'vini@dio.com')
        expect(mockConsole).toHaveBeenCalled()
    })
})

