import  Express, { Request, Response } from "express";
import { UserController } from './controllers/UserController'
import { UsuariosService } from './services/classes/UsuariosService'
import { UserRepository } from './Repositories/classes/UserRepository'
import { AuthController } from "./controllers/AuthController";
import { AuthService } from './services/classes/AuthService'
import { AuthRepository } from "./Repositories/classes/AuthRepository";
import { tokenRepository } from './Repositories/classes/tokenRepository'
const router = Express.Router()
const userrepository =  new UserRepository()
const userservice = new UsuariosService(userrepository)
const usercontroller = new UserController(userservice)

router.post("/cadastro", async function(req:Request, res:Response){
 const data = await usercontroller.Cadastro(req, res)
 return data
})

const tokenrepository = new tokenRepository()
const authrepository = new AuthRepository(userrepository, tokenrepository)
const authservice = new AuthService(authrepository)
const authcontroller = new AuthController(authservice)

router.post('/login', async function(req:Request, res:Response){
    const data = await authcontroller.logar(req, res)
    return data
})


export default router;