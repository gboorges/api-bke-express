import { getById } from "../../models/userModel.js"

const userById = async (req, res) => {
    const {id} = req.params // req.params cria um objeto com os parâmetros coletados para poder compartilhar a informação salva
    
    const user = await getById(+id) // "+" na frente de uma string que é um valor numérico transforma o valor de string em número. equivale À "parseInt(id)"
    
    if(user){    
        res.json({message: "User Get By Id",
            user
        })}
    else   
        return res.status(404).json({
            error: "Usuário não encontrado"
        })
}

export default userById