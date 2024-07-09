const pool = require('../utilidades/clienteDB');

const loginUsuario = async (req) => {

    const client = await pool.connect();

    const result = await client
	.query(`SELECT * 
	    FROM usuario 
	    WHERE correo = '${req.body.correo}' 
	    AND password = '${req.body.password}';`)
	.then(res => res.rows);
    client.release();

    return result;
}

const existeUsuario = async (req) => {

    const client = await pool.connect();

    const result = await client.query(`SELECT nombre, correo 
										FROM usuario 
										WHERE correo = '${req.body.correo}';`)
	.then(res => res.rows);
    client.release();

    return result;
}

const signupUsuario = async (req) => {

    const client = await pool.connect();

    const result = await client
	.query(`INSERT INTO 
	    usuario(
		nombre, 
		correo, 
		password, 
		tipousuario) 
	    VALUES(
		'${req.body.nombre}', 
		'${req.body.correo}', 
		'${req.body.password}', 
		'${req.body.tipoUsuario}');`);
    client.release();

    return { command: result.command, rowCount: result.rowCount };
}


module.exports = {
    loginUsuario,
    existeUsuario,
    signupUsuario,
}
