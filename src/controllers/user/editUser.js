import { update } from "../../models/userModel.js"

const editUser = async (req, res) => {
    const {id} = req.params
    const user = req.body

    user.id = +id // adiciona uma nova propriedade para o objeto (user.id)

    const result = await update(user)

    if(!result)
        return res.status(401).json({
            error: "Erro ao editar o usuário."
        })

    return res.json({
        succes: "Usuário atualizado com sucesso!",
        user: result
    })
}

export default editUser