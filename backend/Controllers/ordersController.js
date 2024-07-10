// vinculamos con la bbdd
const hoja_verde = require("../db/hoja_verde");

//getAllOrders
const getAllOrders = (req, res)=>{
    const sql = `SELECT * FROM orders`;
    hoja_verde.query(sql, (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//getOrderById
const getOrderById = (req, res)=>{
    //desestruct {id}
    const {id} = req.params;
    const sql = `SELECT * FROM orders WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//createOrder
const createOrder = (req, res)=>{
    const {nombre, descripcion, inmediatez, costo} = req.body;
    const sql = `INSERT INTO orders (nombre, descripcion, inmediatez, costo) VALUES (?, ?, ?,?)`;
    hoja_verde.query(sql, [nombre, descripcion, inmediatez, costo], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Orden creada"})
    });
};

//updateOrder
const updateOrder = (req, res)=>{
    const {id} = req.params;
    const {nombre, descripcion, inmediatez, costo} = req.body;
    const sql = `UPDATE orders SET nombre = ?, descripcion = ?, inmediatez = ?, costo = ? WHERE id = ?`;
    hoja_verde.query(sql, [nombre, descripcion, inmediatez, costo, id], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Orden actualizada"})
    });
};


//deleteOrder
const deleteOrder = (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM orders WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Orden borrada"})
    });
};


module.exports = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder
}