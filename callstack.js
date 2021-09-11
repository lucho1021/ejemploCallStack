//Datos de usuario
let datosUsuario = {
  username: "hola@gmail.com",
  password: "Admin123",
};

//cuando yo declare la funcion principal
//cuando yo  declaro mi segunda funcion
function conectarconNetflix(datos, generarRespuestaCallBack) {
  console.log("Procesando la peticion...");

  setTimeout(function () {
    if (datos.username === "hola@gmail.com" && datos.password === "Admin123") {
      generarRespuestaCallBack(200);
    } else {
      generarRespuestaCallBack(204);
    }
  }, 5000);
}
//cuando yo utilizo o llamo la funcion de callback
//declaro lo que hace el CallBack
conectarconNetflix(datosUsuario, function (codigo) {
  if (codigo == 200) {
    console.log("Bienvenido a Netflix");
    console.log("Cargando peliculas...");
  } else {
    console.log("No estas registrado");
  }
});
