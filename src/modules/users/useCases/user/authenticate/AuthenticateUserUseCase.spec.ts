import { UserRepositoryInMemory } from "../../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../create/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let createUserUseCase: CreateUserUseCase;
let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryIM: UserRepositoryInMemory;

describe("Authenticate user", ()=> {
    beforeEach(() => {
        userRepositoryIM = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryIM);
        createUserUseCase = new CreateUserUseCase(userRepositoryIM);
    });

    it("It should be possible to create a token (authenticate an user)", async () => {
        const user: ICreateUserDTO = {
            name: "Test User",
            email: "teste@gmail.com",
            password: "1234",
            driver_license: "000123"
        }

        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({ 
            email: user.email, 
            password: user.password 
        });

        expect(result).toHaveProperty("token");
    });

});