const validation = (req,res,next)=>{

    var {nome,telefone,email,cep} = req.body
    if(nome === null || nome === "" || nome === undefined){
        res.status(500).json({msg:false,erro:"o campo nome é obrigatório"})
    }else if(telefone === null || telefone === "" || telefone === undefined){
        res.status(500).json({msg:false,erro:"o campo telefone é obrigatório"})
    }else if(email === null || email === "" || email === undefined){
        res.status(500).json({msg:false,erro:"o campo email é obrigatório"})
    }else if(cep === null || cep === "" || cep === undefined){
        res.status(500).json({msg:false,erro:"o campo cep é obrigatório"})
    }
    else{
        next()
    } 

} 

module.exports = validation