//Controlador de todas las funciones presentes en el inventario

function inv(req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM inventario', (err, inventario) => {
            if(err){
                res.json(err);
            }
            res.render('inv/inv', { inventario });
        });
    });
}

function agregar(req, res) {
    res.render('inv/agregar');
}

function tienda(req, res){
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO inventario SET ?', [data], (err, rows) => {
            res.redirect('/agregar')
        });
    });
}

function vender(req, res){
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM inventario WHERE id = ?', [id], (err, inventario) => {
            if(err){
                res.json(err);
            }
            res.render('inv/vender', {inventario});
        })
    })
}

function venta(req, res){
    const id = req.params.id;
    const cant = req.body.cantidad_vendida;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO ventas SET ?', [data], (err, rows) => {
            if(err){
                console.log(err);
            }else{
                console.log('QUERY ACEPTADO')
            }
            setTimeout(function(){res.redirect('/inv')}, 2000)
        })
    })

    req.getConnection((err, conn) => {
        conn.query('UPDATE inventario SET cantidad = cantidad - ? WHERE id = ?', [cant, id], (err, rows) => {
            if(err){
                console.log(err);
                console.log("ERROR EN QUERY")
            }
            
            //res.redirect('/inv')
        });
    });

}

function ventas(req, res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ventas ORDER BY fecha DESC', (err, ventas) => {
            if(err){
                res.json(err);
            }
            res.render('inv/ventas', { ventas });
        });
    });
}

function sumar(req, res){
    const id = req.body.id;
    const cant2 = req.body.cant2;
    req.getConnection((err, conn) => {
        if(cant2 != 0){
            conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                conn.query('UPDATE inventario SET cantidad = cantidad + ? WHERE id = ?', [cant2, id])
                res.redirect('/inv');
            })
        }else{
            conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                conn.query('UPDATE inventario SET cantidad = cantidad +1 WHERE id = ?', [id])
                res.redirect('/inv');
            })
        }
    })
}

function editar(req, res){
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM inventario WHERE id = ?', [id], (err, inventario) => {
            if(err){
                res.json(err);
            }
            res.render('inv/editar', { inventario });
        });
    }); 
}

function actualizar(req, res){
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE inventario SET ? WHERE id = ?', [data, id], (err, rows) => {
            if(err){
                console.log(err);
            }
            res.redirect('/inv')
        });
    });
}

function sumaryrestar(req, res){
    const id = req.body.id;
    const cant = req.body.cant;
    var boton = req.body.boton;
    req.getConnection((err,conn) => {
        if(boton == "sumar"){
            if(cant != 0){
                conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                    conn.query('UPDATE inventario SET cantidad = cantidad + ? WHERE id = ?', [cant, id])
                    res.redirect('/inv');
                })
            }else{
                conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                    conn.query('UPDATE inventario SET cantidad = cantidad +1 WHERE id = ?', [id])
                    res.redirect('/inv');
                })
            }
        }
        if(boton == "restar"){
            if(cant != 0){
                conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                    conn.query('UPDATE inventario SET cantidad = cantidad - ? WHERE id = ?', [cant, id])
                    res.redirect('/inv');
                })
            }else{
                conn.query('SELECT inventario WHERE id = ?', [id], (err, rows) => {
                    conn.query('UPDATE inventario SET cantidad = cantidad -1 WHERE id = ?', [id])
                    res.redirect('/inv');
                })
            }
        }
    })
}

function eliminar(req, res){
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM inventario WHERE id = ?', [id], (err, inventario) => {
            if(err){
                res.json(err);
            }
            res.redirect('/inv');
        });
    }); 
}


module.exports = {
    inv: inv,
    agregar: agregar,
    tienda: tienda,
    vender:vender,
    venta:venta,
    ventas:ventas,
    sumar:sumar,
    editar: editar,
    actualizar: actualizar,
    sumaryrestar: sumaryrestar,
    eliminar:eliminar,
}

