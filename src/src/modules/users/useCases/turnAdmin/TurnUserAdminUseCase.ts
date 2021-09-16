import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/user/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
  }
}

export { TurnUserAdminUseCase };