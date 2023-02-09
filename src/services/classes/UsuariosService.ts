import { UserRegisterDto } from "../../Dto/UserRegisterDto";
import { IUsuariosService } from "../interfaces/IUsuariosService";
import {IUserRepository} from '../../Repositories/interfaces/IUserRepository'

export class UsuariosService implements IUsuariosService{
    constructor(private readonly UserRepository:IUserRepository){}
    async Cadastro({ Email, Senha }: UserRegisterDto) {
        const dados = await this.UserRepository.create({Email, Senha})
        return dados
    }

}