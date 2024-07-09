const { obtenerCursos, 
    obtenerCurso, 
    obtenerCategorias, 
    obtenerMisCursos, 
    matricularCurso, 
    actualizarCurso, 
    crearCurso, 
    editarCurso, 
    borrarCurso } = require('../models/modeloCurso');


const obtenerCursosHandler = async (req, res) => {
    
    try {

	const cursos = await obtenerCursos(req);

	return res.status(200).send({ cursos });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }

}

const obtenerCursoHandler = async (req, res) => {

    try {

	req.body.idCurso = req.params.id;
	const curso = await obtenerCurso(req);

	return res.status(200).send({ curso });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const obtenerCategoriasHandler = async (req, res) => {

    try {
	
	const categorias = await obtenerCategorias();

	return res.status(200).send({ categorias });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const obtenerMisCursosHandler = async (req, res) => {

    try {
	
	const misCursos = await obtenerMisCursos(req);

	return res.status(200).send({ cursos: misCursos });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const matricularCursoHandler = async (req, res) => {

    try {

	req.body.idCurso = req.params.id;
	const data = await matricularCurso(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const actualizarCursoHandler = async (req, res) => {

    try {

	req.body.idCurso = req.params.id;
	const data = await actualizarCurso(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const crearCursoHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Rol de usuario invalido.');
	}

	const data = await crearCurso(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const editarCursoHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Rol de usuario invalido.');
	}

	req.body.idCurso = req.params.id;
	const data = await editarCurso(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}

const borrarCursoHandler = async (req, res) => {

    try {

	if (req.body.tipoUsuario !== 'administrador') {
	    throw new Error('Rol de usuario invalido.');
	}

	req.body.idCurso = req.params.id;
	const data = await borrarCurso(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
	return res.status(400).send({ error: err.message });
    }
}


module.exports = {
    obtenerCursosHandler,
    obtenerCursoHandler,
    obtenerCategoriasHandler,
    obtenerMisCursosHandler,
    matricularCursoHandler,
    actualizarCursoHandler,
    crearCursoHandler,
    editarCursoHandler,
    borrarCursoHandler,
}
