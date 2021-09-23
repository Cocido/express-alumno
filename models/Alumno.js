const { model, Schema } = require('mongoose');

const alumnoSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        default: true
    },
    experiencia_laboral: {
        type:  String,
        required: false
    },
    aficiones: {
        type: String,
        required: false
    },
    conocimientos: {
        type: Array,
        required: true
    },
    fecha_nac: {
        type: Date,
        required: true
    },
    estado_civil: {
        type: String,
        required: false
    },
    num_tel: {
        type: Number,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    ocupacion: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    estudio: {
        type: String,
        required: false
    },
    estado: {
        type: Boolean,
        required: true
    }



});


module.exports = model('Alumno',alumnoSchema);