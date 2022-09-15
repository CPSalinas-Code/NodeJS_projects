const EventEmitter = require('events'); //events retorna una CLASE
// console.log(EventEmitter);

const emisorEventos = new EventEmitter(); //crear instancia, nuevo obj permite emitir eventos

emisorEventos.on('compra',(total) => {
    console.log(`Se realizo una compra por $${total}`);
});

emisorEventos.emit('compra',500);