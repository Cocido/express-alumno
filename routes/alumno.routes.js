const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut, rutaDelete, deleteUser
} = require('../controllers/alumno.controllers');

//  Ruta que devuelve todos los usuarios
router.get('/', rutaGet);

router.post('/', rutaPost);

module.exports = router;
