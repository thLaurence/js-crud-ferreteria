function notas(req, res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM notas ORDER BY fecha DESC', (err, notas) => {
            if(err){
                res.json(err);
            }
            res.render('notas/notas', { notas });
        });
    });
}

function agregarNotas(req, res){
    res.render('notas/agregarNotas');
}

function agregar(req, res){
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO notas SET ?', [data], (err, rows) => {
            res.redirect('/notas/agregarNotas')
        });
    });
}

function eliminar(req, res){
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM notas WHERE id = ?', [id], (err, notas) => {
            if(err){
                res.json(err);
            }
            res.redirect('/notas');
        });
    }); 
}

module.exports = {
    notas:notas,
    agregarNotas:agregarNotas,
    agregar:agregar,
    eliminar:eliminar,
}