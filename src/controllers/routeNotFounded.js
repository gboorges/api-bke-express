const roteNotFounded = (req, res) => {
    res.status(404).json({message: "Rota não encontrada"})
}

export default roteNotFounded