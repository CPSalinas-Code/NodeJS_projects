//const curso = require('./curso.json');
//console.log(typeof curso);
//console.log(curso.esPublico);

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVisitas": 454356,
    "numLike": 123153,
    "temas": ["JavaScript", "NodeJS"],
    "esPublico": true
  }
//console.log(typeof infoCurso);
//objeto --> cadena de caracteres
//cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(typeof infoCursoJSON);

//recibimos info del servidor formato JSON
//cadena de caracteres --> Objeto JS
let infoCursoOBJ = JSON.parse(infoCursoJSON);
console.log(typeof infoCursoOBJ);
