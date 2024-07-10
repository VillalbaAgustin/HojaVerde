// vinculamos con la bbdd
const hoja_verde = require("../db/hoja_verde");

//getAllPlants
const getAllPlants = (req, res)=>{
    const sql = `SELECT * FROM plants`;
    hoja_verde.query(sql, (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//getPlantById
const getPlantById = (req, res)=>{
    //desestruct {id}
    const {id} = req.params;
    const sql = `SELECT * FROM plants WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json(result)
    });
};

//createPlant
const createPlant = (req, res)=>{
    const {nombre, descripcion, dificultad, propagacion } = req.body;
    const sql = `INSERT INTO plants (nombre, descripcion, dificultad, propagacion) VALUES (?, ?, ?, ?)`;
    hoja_verde.query(sql, [nombre, descripcion, dificultad, propagacion], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Planta creada"})
    });
};

const updatePlant = (req, res)=>{
  // desestructuracion de la consulta
  const {id} = req.params;
  const {nombre, descripcion, dificultad, propagacion} = req.body;

  // creamos la consulta sql
  const sql = 'UPDATE plants SET nombre = ?, descripcion = ?, dificultad = ?, propagacion = ? WHERE id = ?';

  // enviamos consulta a la bbdd
  hoja_verde.query(sql,[nombre, descripcion, dificultad, propagacion, id],(err, result)=>{
      //si sucede algun error
      if(err){throw err}
      //si todo sale bien
      res.json({mensaje:"Planta actualizada"})
  });
}

//deletePlant
const deletePlant = (req, res)=>{
    const {id} = req.params;
    const sql = `DELETE FROM plants WHERE id = ?`;
    hoja_verde.query(sql, [id], (err, result)=>{
        if(err){throw err}
        res.json({mensaje: "Planta borrada"})
    });
};

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant
}
