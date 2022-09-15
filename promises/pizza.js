//funcion para simular falla
//retornara verdadero si se completo el pedido y falso si no 
const statusPedido = () => {
  const estatus = Math.random() < 0.8;//random entre 0 y 1, determinar si es menor a 0.8
  //console.log(estatus);
  return estatus;
};
// 0.8 asi se simula que la mayoria de casos son satisfactorios
/*for (let i = 0; i<10; i++) {
  console.log(statusPedido());
}*/

const miPedidoPizza = new Promise((resolve,reject) => {
  setTimeout(() => {
    if(statusPedido()){
      resolve("Pedido anadido");
    }else{
      reject("Pedido rechazado");
    }
  },3000);
});

/*const pedidoAnadido = (valor) => {
  console.log(valor);
};

const pedidoRechazado = (razonRechazo) => {
  console.log(razonRechazo);
};
miPedidoPizza.then(pedidoAnadido,pedidoRechazado); 
*/
/*miPedidoPizza
  .then((valor)=>{
    console.log(valor);
  })
  .then(null, (valorRechazo)=>{
    console.log(valorRechazo);
  });
*/
miPedidoPizza
  .then((valor)=>{
    console.log(valor);
  })
  .catch((valorRechazo)=> {
    console.log(valorRechazo);
  });


  //miPedidoPizza.then(manejarPedido).catch(manejarRechazo);
  //Otra forma valida
  //se usa cuando la logica de las funciones son mucho mas complicadas

  