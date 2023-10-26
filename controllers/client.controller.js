const { getAllClients } = require("../services/clientsSqlz");


const getClientsController = async(req, res) =>{
    try{
        const clients = await getAllClients();
        res.status(200).json({clients});
    }catch(e){
        res.status(500).json({error: "error fetching clients"});
    }
}


module.exports = {
    getClientsController,
}