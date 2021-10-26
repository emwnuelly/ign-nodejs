import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { AppError } from '../../../../../errors/AppError';
import { deleteFile } from "../../../../../utils/file";

interface IRequest {
        id: string;
        avatar_file: string;
}

@injectable()
class UpdateAvatarUseCase { 

        constructor(
                @inject("UserRepository")
                private usersRepository: IUserRepository
        ){}

        async execute({ id, avatar_file}: IRequest): Promise<void>{
                const user = await this.usersRepository.findById(id);

                if(!user){
                        throw new AppError("User not found!", 404);
                }

                if(user.avatar){
                        await deleteFile(`./tmp/avatar/${user.avatar}`); 
                }
                
                user.avatar = avatar_file;

                await this.usersRepository.create(user);

        }
}

export { UpdateAvatarUseCase }