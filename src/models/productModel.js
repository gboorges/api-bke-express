import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAll = async () => {
    const products = await prisma.products.findMany({
        select: {
            id: true,
            modelo: true,
            marca: true,
            valor: true,
            quantidade: true
        }
    })
    return products
}