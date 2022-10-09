const TableModel = require('../model/TableModel');


module.exports.userAdmin = async(req,res) => {
    const admin = await TableModel.find();
    res.send(admin);
}