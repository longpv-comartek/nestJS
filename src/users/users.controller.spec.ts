import { UserController } from './users.controller';
import { UserService } from './users.service';

describe('CatsController', () => {
    let UsersController: UserController;
    let UsersService: UserService;

    beforeEach(() => {
        UsersService = new UserService();
        UsersController = new UserController(UsersService);
    });

    describe('findAll', () => {
        it('should return an array of users', async () => {
            const result = ['test'];
            jest.spyOn(UsersService, 'getUser').mockImplementation(() => result);

            expect(await UsersController.getUser()).toBe(result);
        });
    });
    describe('', () => {
        it('should return an array of users', async () => {
            const result = [];
            jest.spyOn(UsersService, 'searchUser').mockImplementation(async () => result);

            expect(await UsersController.searchUser('Vĩ')).toBe(result);
        });
    });
});