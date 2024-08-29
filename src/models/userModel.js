import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAll = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    })
    return users
}

export const getById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id // mesma coisa do que colocar id = id, ou seja, o objeto tem o mesmo nome do que está sendo passado por parâmetro
        },
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return user
}

export const create = async (user) => {
    const result = await prisma.user.create({
        data: user, // equivale à {name: user.name, email: user.email, pass: user.pass}
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return result
}

export const remove = async (id) => {
    const user = await prisma.user.delete({
        where: {
            id
        },
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return user
}

export const update = async (user) => {
    const result = await prisma.user.update({
        where:{
            id: user.id
        },
        data: user,
        select:{
            id: true,
            name: true,
            email: true
        }
    })
    return result
}