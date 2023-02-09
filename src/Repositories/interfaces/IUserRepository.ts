import { UserRegisterDto } from "../../Dto/UserRegisterDto";

export interface IUserRepository{
    create({Email, Senha}:UserRegisterDto);
    EncontrarUsario(Email:string);
}