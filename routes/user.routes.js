const router = require('express').Router();

const { 
    rutaGet, rutaPost, rutaPut, rutaDelete
 } = require('../controllers/user.controllers');

router.get('/informes', rutaGet)

router.post('/', rutaPost)

router.put('/', rutaPut)

router.delete('/', rutaDelete)

module.exports = router;
