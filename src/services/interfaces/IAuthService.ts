import {UserRegisterDto} from "../../Dto/UserRegisterDto"
export interface IAuthService{
    logar({Email, Senha}:UserRegisterDto);
}