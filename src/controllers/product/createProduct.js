import { create } from "../../models/productModel.js"

const createProduct = async (req, res) => {
    const product = req.body

    const result = await create(product)

    if(!result)
        return res.status(500).json({
            error: "Erro ao cadastrar um produto novo."
        })
    
    return res.json({
        succes: "Produto cadastrado com sucesso!",
        product: result
    })
}

export default createProduct