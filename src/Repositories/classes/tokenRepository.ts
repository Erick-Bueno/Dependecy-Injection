import cliente from "../../../prisma/cliente";
import { ItokenRepository } from "../interfaces/ItokenRepositoy";

export class tokenRepository implements ItokenRepository{
    async jalogou(Email: string) {
        const dados = cliente.tokens.findFirst({where:{Email:Email}})
        return dados

    }

}