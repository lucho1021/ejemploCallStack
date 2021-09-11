let datosUsuario = {
    username: "hola@gmail.com",
    password: "Admin123"
  };

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

  async function procesarPeticion(datosUsuario){
    try{
        let respuesta=await conectarconNetflix(datosUsuario);
        console.log(respuesta)
    }catch(error){
        console.log(error)
    }
  }

  procesarPeticion(datosUsuario);