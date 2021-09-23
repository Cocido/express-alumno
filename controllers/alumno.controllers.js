const ctrlHome = {};
const { findById, findByIdAndUpdate, findByIdAndDelete } = require('../models/Alumno');
const Alumno = require('../models/Alumno');

// Devuelve todos los usuarios de la colección
ctrlHome.rutaGet = async (req, res) => {
    const alumnos = await Alumno.find() // consulta para todos los documentos
    
    // Respuesta del servidor
    res.json(alumnos);
}

// Controlador que almacena un nuevo usuario
ctrlHome.rutaPost = async (req, res) => {
    const alumno = new Alumno(req.body);
    await alumno.save() 

    res.json({msg: 'Alumno creado correctamente'});
}


module.exports = ctrlHome;