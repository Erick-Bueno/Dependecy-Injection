import { UserRegisterDto } from "../../Dto/UserRegisterDto";

export interface IAuthRepository{
    login({Email, Senha}:UserRegisterDto);
}