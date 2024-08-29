import { remove } from "../../models/userModel.js"

const deleteUser = async (req, res) => {
    const {id} = req.params
    const user = await remove(+id) // "+" na frente de uma string que é um valor numérico transforma o valor de string em número. equivale À "parseInt(id)"
    
    if(!user)    
        return res.status(404).json({
            error: "Usuário não encontrado."
        })

    res.json({
        succes: "Usuário deletado com sucesso!",
        user
    })
        
}

export default deleteUser