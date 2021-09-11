let datosUsuario = {
  username: "hola@gmail.com",
  password: "Admin123"
};

//cuando yo declare la funcion principal
//cuando yo  declaro mi segunda funcion
function conectarconNetflix(datos) {
  console.log("Procesando la peticion...");

  let promesa = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (
        datos.username === "hola@gmail.com" && datos.password === "Admin123"
      ) {
        resolve("Bienvenido a Netflix");
      } else {
        reject("Error");
      }
    }, 5000);
  });
  return promesa;
}

conectarconNetflix(datosUsuario)
  .then(function (respuesta) {
    console.log(respuesta);
  })
  .catch(function (respuesta) {
    console.log(respuesta);
  });
