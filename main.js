// Mi idea es hacer una calculadora de bebidas.

// El primer paso es crear los articulos mediante objetos

const artUno ={
    name: "Vino ",
    tipo:"Tinto",
    rendimientoXpersona:3, // 3 personas por botella
    tamaño:"750cc"
}

const artDos ={
    name: "Vino Blanco ",
    tipo:"Blanco",
    rendimientoXpersona:5, // 5 personas por botella
    tamaño:"750cc"
}


const artTres ={
    name: "Espumante ",
    tipo:"Extra Brut",
    rendimientoXpersona: 8, // 8 personas por botella
    tamaño:"750cc"
}


const artCuatro ={
    name: "Cerveza ",
    tipo:"Rubia",
    rendimientoXpersona:1, // 1 personas por lata
    tamaño:"500cc"
}

const artCinco ={
    name: "Gaseosa",
    tipo:"Coca-Cola",
    rendimientoXpersona:2, // 2 personas por botella
    tamaño:"1000cc"
}

let arts = [artUno.name,artDos.name,artTres.name,artCuatro.name,artCinco.name]
let rendimiento = [artUno.rendimientoXpersona,artDos.rendimientoXpersona,artTres.rendimientoXpersona,artCuatro.rendimientoXpersona,artCinco.rendimientoXpersona]

//Preguntamos si quiere realizar un evento

let evento = prompt ('¿Está pensando en realizar un evento?');
if (evento == 'Si') {
    alert ('Está en el lugar indicado para que le presupuestemos sus bebidas')
} else {
    alert ('Ya llegará el momento!')
}


// Le damos la posibilidad que elija al usuario el tipo de bebidas que quiere
function Bebidas() {
    alert ('Bienvenido! Estos son los tipos de bebidas que trabajamos');
    let tipoBebidas = prompt (`Elige la bebida que le interese ${arts} `)
    switch (tipoBebidas) {
        case "Vino Tinto":
            alert (artUno.name);
            break;
         case "Vino Blanco":
                alert (artDos.name);
                break;
         case "Espumante":
                alert (artTres.name);
                break;
         case "Cerveza":
                alert (artCuatro.name);
                break;
        case "Gaseosa":
                alert (artCinco.name);
                break;
        default:
            alert ('Lamentamos no poder ayudarte!')
            break;
    }
}
Bebidas ();

let cantidadInvitados;
do{
    cantidadInvitados = parseInt(prompt("¿Cual es la cantidad de invitados para su evento?"))
    if (cantidadInvitados){
        alert ('Complete los siguientes datos')
        let nombre = prompt ('ingrese su nombre')
    let apellido = prompt ('ingrese su apellido')
    let edad = prompt ('ingrese su edad')
    let correo = prompt ('ingrese su correo')
        if(nombre == "" || apellido == "" || edad == "" || correo == ""){
            alert('Complete todos los datos')
        }else {
            for (let i = cantidadInvitados; i<=100; i++) {
               console.log ('Por '+ i + ' invitados, el calculo es de ' + calculoBebida )
            }
        }                       
    }
    console.log(cantidadInvitados);
} while (cantidadInvitados) 

let calculoBebida = cantidadInvitados / rendimiento

function rendimientoXinvitados(cantidadInvitados, rendimientoXpersona) {
    return calculoBebida
}
rendimientoXinvitados();

let datosUsuario = ["nombre" ,"apellido" ,"edad" ,"correo"]
console.log (datosUsuario)

// function rendimientoXinvitados(cantidadInvitados, rendimientoXpersona) {
//     return cantidadInvitados / tipobebidas [rendimientoXpersona]
// }
// rendimientoXinvitados();