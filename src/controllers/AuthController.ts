import { Request, Response } from 'express';
import {IAuthService} from '../services/interfaces/IAuthService'
export class AuthController{
    constructor(private readonly AuthService:IAuthService){}
    async logar(req:Request, res:Response){
        const {Email, Senha} = req.body
        const data = await this.AuthService.logar({Email, Senha})
        return res.send(data)
    }
}