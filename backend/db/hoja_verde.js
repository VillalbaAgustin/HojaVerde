const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.log("Error de conexión con el servidor: " + err);
    return;
  }
  console.log("Estado de conexión: CONECTADA");

  const sqlCreatedb = `CREATE DATABASE IF NOT EXISTS hoja_verde`;

  connection.query(sqlCreatedb, (err, result) => {
    if (err) {
      console.log("Error de conexión con el servidor: " + err);
      return;
    }
    console.log("Base de datos: CREADA/EXISTENTE/GARANTIZADA");

    connection.changeUser({ database: "hoja_verde" }, (err) => {
      if (err) {
        console.log("Error al cambiar a la base de datos hoja_verde");
        return;
      }

      /**CREACION TABLA PLANTAS (TU JARDIN)** */
      const createTablePlants = `
                CREATE TABLE IF NOT EXISTS plants (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255) NOT NULL,
                    dificultad VARCHAR(255) NOT NULL,
                    propagacion VARCHAR(255) NOT NULL
                )`;

      connection.query(createTablePlants, (err, result) => {
        if (err) {
          console.error("Error al crear la tabla plants: ", err);
          return;
        }
        console.log("Tabla plants: CREADA/EXISTENTE/GARANTIZADA");
      });


      /**CREACION TABLA SERVICIOS** */
      const createTableServices = `
                CREATE TABLE IF NOT EXISTS services (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255) NOT NULL,
                    inmediatez VARCHAR(255) NOT NULL,
                    costo INT NOT NULL
                )`;

      connection.query(createTableServices, (err, result) => {
        if (err) {
          console.error("Error al crear la tabla services: ", err);
          return;
        }

        console.log("Tabla services: CREADA/EXISTENTE/GARANTIZADA");
      });


      /**CREACION TABLA ÓRDENES** */
      const createTableOrders = `
                CREATE TABLE IF NOT EXISTS orders (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255) NOT NULL,
                    inmediatez VARCHAR(255) NOT NULL,
                    costo INT NOT NULL
                )`;

                // FOREIGN KEY (services_id) REFERENCES services (id),
                // FOREIGN KEY (plantts_id) REFERENCES plants (id)


      connection.query(createTableOrders, (err, result) => {
        if (err) {
          console.error("Error al crear la tabla orders: ", err);
          return;
        }

        console.log("Tabla orders: CREADA/EXISTENTE/GARANTIZADA");
      });

      /**CREACION TABLA CLIENTES** */
      /*const createTableClientes = `
                CREATE TABLE IF NOT EXISTS clientes (
                    mail VARCHAR(255) PRIMARY KEY,
                    fecha_nac DATE NOT NULL,
                    nacionalidad VARCHAR(255) NOT NULL,
                    id_plants INT,
                    id_services INT,
                    CONSTRAINT FK_id_plants FOREIGN KEY(id_plants) REFERENCES plants(id),
                    CONSTRAINT FK_id_services FOREIGN KEY(id_services) REFERENCES services(id)
                )`;

            connection.query(createTableClientes, (err, result)=>{
                if(err){
                    console.error("Error al crear la tabla clientes: ", err);
                    return
                };

                console.log("Tabla clientes: CREADA/EXISTENTE/GARANTIZADA");
            });*/
    });
  });
});

module.exports = connection;
