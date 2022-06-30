// // Mi idea es hacer una calculadora de bebidas.

// // El primer paso es crear los articulos mediante objetos

// const artUno ={
//     name: "Vino ",
//     tipo:"Tinto",
//     rendimientoXpersona:3, // 3 personas por botella
//     tamaño:"750cc"
// }

// const artDos ={
//     name: "Vino Blanco ",
//     tipo:"Blanco",
//     rendimientoXpersona:5, // 5 personas por botella
//     tamaño:"750cc"
// }


// const artTres ={
//     name: "Espumante ",
//     tipo:"Extra Brut",
//     rendimientoXpersona: 8, // 8 personas por botella
//     tamaño:"750cc"
// }


// const artCuatro ={
//     name: "Cerveza ",
//     tipo:"Rubia",
//     rendimientoXpersona:1, // 1 personas por lata
//     tamaño:"500cc"
// }

// const artCinco ={
//     name: "Gaseosa",
//     tipo:"Coca-Cola",
//     rendimientoXpersona:2, // 2 personas por botella
//     tamaño:"1000cc"
// }

// let arts = [artUno.name,artDos.name,artTres.name,artCuatro.name,artCinco.name]
// let rendimiento = [artUno.rendimientoXpersona,artDos.rendimientoXpersona,artTres.rendimientoXpersona,artCuatro.rendimientoXpersona,artCinco.rendimientoXpersona]

// //Preguntamos si quiere realizar un evento

// let evento = prompt ('¿Está pensando en realizar un evento?');
// if (evento == 'Si') {
//     alert ('Está en el lugar indicado para que le presupuestemos sus bebidas')
// } else {
//     alert ('Ya llegará el momento!')
// }


// // Le damos la posibilidad que elija al usuario el tipo de bebidas que quiere
// function Bebidas() {
//     alert ('Bienvenido! Estos son los tipos de bebidas que trabajamos');
//     let tipoBebidas = prompt (`Elige la bebida que le interese ${arts} `)
//     switch (tipoBebidas) {
//         case "Vino Tinto":
//             alert (artUno.name);
//             break;
//          case "Vino Blanco":
//                 alert (artDos.name);
//                 break;
//          case "Espumante":
//                 alert (artTres.name);
//                 break;
//          case "Cerveza":
//                 alert (artCuatro.name);
//                 break;
//         case "Gaseosa":
//                 alert (artCinco.name);
//                 break;
//         default:
//             alert ('Lamentamos no poder ayudarte!')
//             break;
//     }
// }
// Bebidas ();

// // let cantidadInvitados;
// // do{
// //     cantidadInvitados = parseInt(prompt("¿Cual es la cantidad de invitados para su evento?"))
// //     if (cantidadInvitados){
// //         alert ('Complete los siguientes datos')
// //         let nombre = prompt ('ingrese su nombre')
// //     let apellido = prompt ('ingrese su apellido')
// //     let edad = prompt ('ingrese su edad')
// //     let correo = prompt ('ingrese su correo')
// //         if(nombre == "" || apellido == "" || edad == "" || correo == ""){
// //             alert('Complete todos los datos')
// //         }else {
// //             for (let i = cantidadInvitados; i<=100; i++) {
// //                console.log ('Por '+ i + ' invitados, el calculo es de ' + calculoBebida )
// //             }
// //         }                       
// //     }
// //     console.log(cantidadInvitados);
// // } while (cantidadInvitados) 

// // let calculoBebida = cantidadInvitados / rendimiento

// // function rendimientoXinvitados(cantidadInvitados, rendimientoXpersona) {
// //     return calculoBebida
// // }
// // rendimientoXinvitados();

// // let datosUsuario = ["nombre" ,"apellido" ,"edad" ,"correo"]
// // console.log (datosUsuario)

// // // function rendimientoXinvitados(cantidadInvitados, rendimientoXpersona) {
// // //     return cantidadInvitados / tipobebidas [rendimientoXpersona]
// // // }
// // // rendimientoXinvitados();

// Articulos
// const baseDeDatos = [
//     {
//         name: "Vino Tinto",
//         tipo:"Tinto",
//         rendimientoXpersona:3, // 3 personas por botella
//         tamaño:"750cc"
//     },
//     {
//         name: "Vino Blanco ",
//         tipo:"Blanco",
//         rendimientoXpersona:5, // 5 personas por botella
//         tamaño:"750cc"
//     },
//     {
//         name: "Espumante ",
//         tipo:"Extra Brut",
//         rendimientoXpersona: 8, // 8 personas por botella
//         tamaño:"750cc"
//     },
//     {
//         name: "Cerveza ",
//         tipo:"Rubia",
//         rendimientoXpersona:1, // 1 persona por lata
//         tamaño:"500cc"
//     }

// ];
const baseDeDatos = [
    {
        id: 1,
        nombre: 'Vino Tinto',
        rendimientoXpersona: 'Rinde 3 personas por botella',
        precio: 700,
        imagen: 'https://i.ibb.co/JjXB44f/vino-tinto.png'
    },
    {
        id: 2,
        nombre: 'Vino Blanco',
        rendimientoXpersona:'Rinde 5 Personas por botella',
        precio: 650,
        imagen: 'https://i.ibb.co/HPdDhp4/vino-blanco.png'
    },
    {
        id: 3,
        nombre: 'Espumante',
        rendimientoXpersona:'Rinde 8 copas por botella',
        precio: 900,
        imagen: 'https://i.ibb.co/8jx9JpF/espumante.png'
    },
    {
        id: 4,
        nombre: 'Cervezas',
        rendimientoXpersona:'Rinde una lata por persona',
        precio: 150,
        imagen: 'https://i.ibb.co/Rp6BVGj/cerveza.png'
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**
 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
 */
 function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'AGREGAR';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}

/**
 * Evento para añadir un producto al carrito de la compra
 */
 function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar un elemento del carrito
 */
function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return miItem[0].precio + total;
    }, 0).toFixed(2);
}

/**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();


