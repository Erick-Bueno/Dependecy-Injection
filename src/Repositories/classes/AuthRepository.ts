import { UserRegisterDto } from "../../Dto/UserRegisterDto";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import { compareSync } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ItokenRepository } from "../interfaces/ItokenRepositoy";
import cliente from "../../../prisma/cliente";


export class AuthRepository implements IAuthRepository{
    constructor(
        private readonly UserRepository:IUserRepository,
        private readonly TokenRepository:ItokenRepository
        ){}
    async login({ Email, Senha }: UserRegisterDto) {
       const find = await this.UserRepository.EncontrarUsario(Email)
       if(!find){
        const resp= {
            msg: "email invalido",
            status: 403
        }
        return resp
       }
       const descript = compareSync(Senha, find.Senha)
       if(descript == false){
        const resp ={
            mas: "senha invalida",
            status: 403
        }
        return resp
       }
       const id = find.id
       const jwt = sign({id:id}, "erick",{expiresIn:2000})
       const logado = await this.TokenRepository.jalogou(Email)
       if(logado){
        const up = await cliente.tokens.update({
            where: {id: logado.id},
            data: {Jwt: jwt}
        })
       }
       else{
        const create = await cliente.tokens.create({
            data:{
                Jwt:jwt,
                Email:Email
            }
        })
       }
       const resp = {
        id:logado.id,
        jwt: jwt
       }
       return resp
    }

}