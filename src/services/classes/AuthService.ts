import { UserRegisterDto } from "../../Dto/UserRegisterDto";
import { IAuthService } from "../interfaces/IAuthService";
import { IAuthRepository } from '../../Repositories/interfaces/IAuthRepository'

export class AuthService implements IAuthService{
    constructor(private readonly AuthRepository: IAuthRepository) {}
    logar({ Email, Senha }: UserRegisterDto) {
        const dados = this.AuthRepository.login({Email , Senha})
        return dados
    }
    
}