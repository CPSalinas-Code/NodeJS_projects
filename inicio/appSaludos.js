//const saludos = require('./saludos.js'); //incluir, no import
//objeto saludo contiene la funcion
const{ saludarHolaMundo,saludar } = require('./saludos.js')

//console.log(saludos.saludar('freeCodeCamp'));
console.log(saludarHolaMundo());
console.log(saludar('freeCodeCamp'));