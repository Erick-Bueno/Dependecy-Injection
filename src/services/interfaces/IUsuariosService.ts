import { UserRegisterDto } from "../../Dto/UserRegisterDto";
export interface IUsuariosService{
    Cadastro({Email, Senha}:UserRegisterDto);
}