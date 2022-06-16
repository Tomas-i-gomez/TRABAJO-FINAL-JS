// Mi idea es hacer una calculadora de bebidas.

// El primer paso es crear los articulos mediante objetos

let artUno ={
    name: "Vino",
    tipo:"Tinto",
    rendimientoXpersona:3,
    tamaño:"750cc"
}

let artDos ={
    name: "Vino",
    tipo:"Blanco",
    rendimientoXpersona:5,
    tamaño:"750cc"
}


let artTres ={
    name: "Espumante",
    tipo:"Extra Brut",
    rendimientoXpersona: 8,
    tamaño:"750cc"
}


let artCuatro ={
    name: "Cerveza",
    tipo:"Rubia",
    rendimientoXpersona:1,
    tamaño:"500cc"
}

let artCinco ={
    name: "Gaseosa",
    tipo:"Coca-Cola",
    rendimientoXpersona:2,
    tamaño:"1000cc"
}

function Bebidas() {
    alert ('Bienvenido! Estos son los tipos de bebidas que trabajamos');
    let tipoBebidas = prompt ('Elige la bebida que le interese' ,artUno ,'\n' ,artDos, '\n', artTres,'\n', artCuatro, '\n' ,artCinco)
    switch (tipoBebidas) {
        case artUno:
            alert (artUno.name);
            break;
         case artDos:
                alert (artDos.name);
                break;
         case artTres:
                alert (artTres.name);
                break;
         case artCuatro:
                alert (artCuatro.name);
                break;
        case artCinco:
                alert (artCinco.name);
                break;
        default:
            alert ('Lamentamos no poder ayudarte!')
            break;
    }
}
Bebidas ();



function artElegidos (name) {
    
}