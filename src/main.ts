import  Express  from "express";
import bodyParser from "body-parser";
import router from "./router";
const app = Express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(router)
export default app