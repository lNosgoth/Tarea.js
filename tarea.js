const suma = (a,b) =>{
  // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código

  return a+ b;
    
}
console.log(suma(10,5))
//-------------------------------------------------------------------------------------------------------------
const sonIguales = (x, y)=>{
  // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Tu código:

  return sonIguales;
          
}
console.log(5===5);
//--------------------------------------------------------------------------------------------------------------
function tienenMismaLongitud(str1, str2) {
 // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código
  return tienenMismaLongitud;
    
  }
  console.log("kilometro"==="kilometro");
//--------------------------------------------------------------------------------------------------------------
  function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    // Tu código:
    if(numero>0)
  {
      return "positivo"
  }else if(numero<0)
  {
      return "Negativo"
  }else
  {
      return false
  }
        
  }
  console.log(esPositivo(0))
//---------------------------------------------------------------------------------------------------------------
  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.

    switch(color)
    {
        case "blue":
            return "This is blue"
        break;
        case "red":
            return "This is red"
        break;
        case "grenn":
             return "This is grenn"
         break;
         case "orange":
             return "This is orange"
         break;
         default:
             return "Color not found"
         break;
    }
    
  }
  console.log(colors("yellow"))
//-----------------------------------------------------------------------------------------------
  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero%3==0 && numero%5==0)
    {
        return "El "+numero+" fizzbuzz"
    }else if(numero % 3==0)
    {
        return "El "+numero+" fizz"
    }else if(numero%5==0)
    {
        return "El "+numero+" buzz"
    }else
    {
        return numero
    }
    
  }
  console.log(fizzBuzz(9))
//-----------------------------------------------------------------------------
  const devolverPrimerElemento = (array) => {
    // Devuelve el primer elemento de un array
    // Tu código:
    array=[1,2,3]
    let primer =array[0]
    return primer
   }
   
   console.log(devolverPrimerElemento(0))
//------------------------------------------------------------------------------
  const agregarItemAlFinalDelArray = (array, elemento) =>{
    // Añade el "elemento" al final del array
    // y devuelve el array
    // Tu código:
    array = [1,2,3]
    elemento=4
    array.push=[elemento]
    return array
    
  }
  console.log(agregarItemAlFinalDelArray(0))
  //-------------------------------------------------------------------------------------

  const nuevoUsuario = (nombre, email, password) => {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    var usuarios = {
      nombre1: "juan",
      email1: "abc@gmail.com",
      password1: "abc123"
      }
     
     if(usuarios.nombre1===nombre && usuarios.email1===email && usuarios.password1===password)
     {
         return usuarios
     }else
     {
      return "Los datos del usuraio no coinciden"   
     }
     }
     console.log(nuevoUsuario("juan","abc@gmail.com","abc123"))
    //--------------------------------------------------------------------------------------------------------

  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    usuario = {
        
      password1:123456
      }
      if(usuario.password1!==password)
      {
          return false
      }
      else{
          return true
      }
    
    }
      console.log(verificarPassword((0),123456))
  
//--------------------------------------------------------------------------------------------------------------
  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario ={
      contraseña:123456,
  }
  
  
  usuario.contraseña = nuevaPassword

  return usuario
  
  
}
console.log(actualizarPassword((0), 10236))
//-----------------------------------------------------------------------------------------------------
  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    // var user = {
    //   amigos: ['Pedro', 'Sebastian']
    // }
    usurario={
      amigos:["juan"]
  }
  nuevoAmigo="alejandra"
  usurario.amigos.push=[nuevoAmigo]
  return usurario
 
}
console.log(agregarAmigo(0))
   


  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    usuario={
      espremium: true
  }
  usuarios=[usuario]
  
  return usuarios
  
}
console.log(pasarUsuarioAPremium(0))
  

  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    // let usuario = {
    //   posts: [{
    //     likes: 4
    //   }]
    // };

  }

  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

class Persona {
    constructor(/*Escribir los argumentos que recibe el constructor*/) {
      // Crea el constructor:

    }
}

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
    
}

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
}

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    
  }

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
  }

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
  } 


  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

