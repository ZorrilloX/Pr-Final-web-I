const { crearCategoria,
    editarCategoria,
    borrarCategoria
} = require('../models/modeloCategoria');

const crearCategoriaHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Tipo de usuario invalido');
	}

	const data = await crearCategoria(req);
	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ 
	    msg: 'Error en crearCategoria.', 
	    error: err.message });
    }
}

const editarCategoriaHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Tipo de usuario invalido');
	}

	req.body.idCategoria = req.params.id;

	const data = await editarCategoria(req);
	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ 
	    msg: 'Error en editarCategoria.', 
	    error: err.message });
    }
}

const borrarCategoriaHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Tipo de usuario invalido');
	}

	req.body.idCategoria = req.params.id;

	const data = await borrarCategoria(req);
	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ 
	    msg: 'Error en borrarCategoria.', 
	    error: err.message });
    }
}


module.exports = {
    crearCategoriaHandler,
    editarCategoriaHandler,
    borrarCategoriaHandler,
}
