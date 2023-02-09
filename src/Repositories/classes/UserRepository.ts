import { UserRegisterDto } from "../../Dto/UserRegisterDto";
import { IUserRepository } from "../interfaces/IUserRepository";
import { hashSync } from 'bcrypt'
import cliente from "../../../prisma/cliente";
import { sign } from "jsonwebtoken";


export class UserRepository implements IUserRepository{
    async EncontrarUsario(Email: string) {
        const encontrarUsario = await cliente.users.findFirst({
            where:{
                Email:Email
            }
        })
        return encontrarUsario
    }
    
    async create({ Email, Senha }: UserRegisterDto) {
        const senhacrypt = hashSync(Senha, 10)
        const criaruser = await cliente.users.create({
            data:{
                Email: Email,
                Senha: senhacrypt
            }
        })
       const id = criaruser.id
       const jwt = sign({id:id},"erick",{expiresIn:2000})
       const addjwt = await cliente.tokens.create({
        data:{
            Jwt: jwt,
            Email: Email
        }
       })
        const resp = {
            "msg": "usuario cadastrado",
            "Email":Email,
            "Jwt": jwt
        }
        return resp
    }

}