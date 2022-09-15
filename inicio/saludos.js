function saludar(nombre){
  return `Hola ${nombre}`;
}

function saludarHolaMundo (){
  return 'Hola, Mundo';
}
//module.exports.saludar = saludar
//module.exports.saludoHolaMundo = saludarHolaMundo
//console.log(module.exports);

//Sintaxis mas optima
module.exports = {
  saludar: saludar,
  saludarHolaMundo: saludarHolaMundo
};