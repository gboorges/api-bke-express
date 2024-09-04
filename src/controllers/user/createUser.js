import { create, validateUser } from "../../models/userModel.js"

const createUser = async (req, res) => { // end-point
    const user = req.body

    const userValidated = validateUser(user)
    console.log(userValidated)

    if(userValidated?.error){
        return req.status(400).json({
            error: "Erro ao criar um novo usuário. Verifique os dados e tente novamente!",
            fieldErrors: userValidated.error.flatten().fieldErrors
        })
    }

    const result = await create(userValidated.data) // passa o resultado de sucesso dos dados validados

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