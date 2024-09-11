const logger = (req, res, next) => {
    // funções para extrair a data da requisição
    const now = new Date()
    const yyyy = now.getFullYear();
    const mm = now.getMonth() + 1;
    const dd = now.getDate()
    
    console.log(`${dd+'/'+mm+'/'+yyyy} ${req.method} ${req.url}`) // exibe a data, o método e a url da requisição
    next()
}

export default logger