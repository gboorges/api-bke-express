import { create } from "../../models/userModel.js"

const createUser = async (req, res) => { // end-point
    const user = req.body

    const result = await create(user)

    if(!result)
        return res.status(500).json({
            error: "Erro ao criar usuário."
        })

    return res.json({
        succes: "Usuário cadastrado com sucesso!",
        user: result
    })

    res.json({message: "Rota POST /user"})
}

export default createUser