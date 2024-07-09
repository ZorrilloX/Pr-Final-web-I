const { loginUsuario,
    existeUsuario,
    signupUsuario } = require('../models/modeloUsuario');


const loginUsuarioHandler = async (req, res) => {

    try {

	const data = await loginUsuario(req);
	if (!data[0]) {
	    throw new Error('Credenciales de usuario no validas.');
	}
	delete data[0].password;

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
        return res.status(400).send({ 
	    msg: 'Error en llamado a loginUsuario.', 
	    error: err.message });
    }
}

const signupUsuarioHandler = async (req, res) => {

    try {

	const datosUsuario = await existeUsuario(req);
	if (datosUsuario[0]) {
	    throw new Error('Correo ya registrado');
	}

	const data = await signupUsuario(req);

	return res.status(200).send({ success: true, data });
    }
    catch (err) {
        return res.status(400).send({ 
	    msg: 'Error en llamado a singupUsuario.', 
	    error: err.message });
    }
}


module.exports = {
    loginUsuarioHandler,
    signupUsuarioHandler,
}
