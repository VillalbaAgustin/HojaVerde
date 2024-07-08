// vinculamos con la bbdd
const hoja_verde = require("../db/hoja_verde");

//getAllServices
const getAllServices = (req, res)=>{
    const sql = `SELECT * FROM services`;
    hoja_verde.query(sql, (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//getServiceById
const getServiceById = (req, res)=>{
    //desestruct {id}
    const {id} = req.params;
    const sql = `SELECT * FROM services WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//createService
const createService = (req, res)=>{
    const {nombre, inmediatez, costo} = req.body;
    const sql = `INSERT INTO services (nombre, inmediatez, costo) VALUES (?, ?, ?)`;
    hoja_verde.query(sql, [nombre, inmediatez, costo], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Servicio creado en el id: "+id})
    });
};

//updateService
const updateService = (req, res)=>{
    const {id} = req.params;
    const {nombre, inmediatez, costo} = req.body;
    const sql = `UPDATE services SET nombre = ?, inmediatez = ?, costo = ? WHERE id = ?`;
    hoja_verde.query = (sql, [nombre, inmediatez, costo, id], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Servicio actualizado"})
    });
};

//deleteService
const deleteService = (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM services WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Servicio borrado"})
    });
};


module.exports = {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService
}