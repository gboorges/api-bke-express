import { remove } from "../../models/userModel.js"

const deleteUser = async (req, res, next) => {
    try{
        const {id} = req.params
        const user = await remove(+id) // "+" na frente de uma string que é um valor numérico transforma o valor de string em número. equivale À "parseInt(id)"
        
        return res.json({
            succes: "Usuário deletado com sucesso!",
            user
        })
    } catch (error) {
        console.log(error)
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Usuário não encontrado :("
            })
        next(error)
    }
    


  
        
}

export default deleteUser