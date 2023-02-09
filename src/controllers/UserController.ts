import { Request, Response } from "express";
import { IUsuariosService } from "../services/interfaces/IUsuariosService"
export class UserController{
    constructor(private readonly UserService:IUsuariosService){}
    async Cadastro(req:Request, res:Response){
        const {Email, Senha} = req.body
        const dado = await this.UserService.Cadastro({Email, Senha})
        return res.json(dado).status(200)
    }
}