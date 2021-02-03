const app = require('./app');

app.set('port', process.env.PORT || 3000);

function init(){
    app.listen(app.get('port'));
    console.log('Servidor escuchando en el puerto', app.get('port'))
}

init();