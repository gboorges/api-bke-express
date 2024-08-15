import {getAll} from "../../models/productModel.js"

const listProduct = async (req, res) => {

    const products = await getAll()

    res.json(products)
}

export default listProduct