/*let monitores = [
    {
        tamañoEnPulgadas: 27,
        resolucionDeLaPantalla: "full HD",
        marca: "LG",
        frecuennciaDeActualizacionHz: 165,
        tipo: "gmaing",
        precio: 4.599
    },
    {
        tamañoEnPulgadas: 32,
        resolucionDeLaPantalla: "full HD",
        marca: "LG",
        frecuennciaDeActualizacionHz: 165,
        tipo: "gaming",
        precio: 7.049
    },
    {
        tamañoEnPulgadas: 29,
        resolucionDeLaPantalla: "full HD",
        marca: "LG",
        frecuennciaDeActualizacionHz: 75,
        tipo: "oficina, gaming",
        precio: 4.710
    },
    {
        tamañoEnPulgadas: 34,
        resolucionDeLaPantalla: "ultra HD",
        marca: "LG",
        frecuennciaDeActualizacionHz: 160,
        tipo: "gaming",
        precio: 8.795
    }
]*/
let teclados = [
  {
      marca: "hyperx",
      referencia: "Alloy Core",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RBG",
      Estilo: "membrana",
      caracteristicaEspecial: "iluminacion, teclado multimedia",
      conectividad: "usb",
      color: "negro",
      material: "plástico, metal",
      precio: 975
  },
  {
      marca: "logitech",
      referencia: "G915",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "color unico",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "layout inglés",
      conectividad: "bluetooth, usb",
      color: "carbon",
      material: "plastico, metal",
      precio: 3079
  },
  {
      marca: "ocelot gaming",
      referencia: "OGMK03",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "retroiluminado",
      conectividad: "usb-a",
      color: "negro",
      material: "plastico",
      precio: 551
  },
  {
      marca: "logitech",
      referencia: "k835",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "NO",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "teclado multimedia",
      conectividad: "usb",
      color: "negro",
      material: "plástico, metal",
      precio: 1500
  },
  {
      marca: "razer",
      referencia: "blackWidow v4 pro",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "reposa muñecas magnético",
      conectividad: "usb",
      color: "negro",
      material: "abs",
      precio: 5126
  },
  {
      marca: "redragon",
      referencia: "K580",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "teclado programable",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 1721
  },
  {
      marca: "redragon",
      referencia: "K509",
      usoRecomendadoParaElProducto: "gaming, oficina",
      iluminacionDelTeclado: "RGB",
      Estilo: "membrana",
      caracteristicaEspecial: "teclado multimedia, resistente al agua",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 741
  },
  {
      marca: "redragon",
      referencia: "K621",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "teclado multimedia",
      conectividad: "bluetooth, usb-c",
      color: "plateado",
      material: "plastico, metal",
      precio: 2038
  },
  {
      marca: "logitech",
      referencia: "KDA",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "color unico",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "iluminacion",
      conectividad: "usb",
      color: "KDA",
      material: "plastico, metal",
      precio: 2991
  },
  {
      marca: "logitech",
      referencia: "G413",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "color unico",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "iluminacion",
      conectividad: "usb",
      color: "carbon prodigy",
      material: "plastico, metal",
      precio: 2450
  },
  {
      marca: "logitech",
      referencia: "G513",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "layout inglés",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 3513
  },
  {
      marca: "logitech",
      referencia: "G610",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "retroiluminado",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "iluminacion",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 1435
  },
  {
      marca: "hp",
      referencia: "2VN99AA",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "ergonómico",
      conectividad: "usb",
      color: "negro, rojo",
      material: "plastico, metal",
      precio: 2800
  },
  {
      marca: "hyperx",
      referencia: "MKW100",
      usoRecomendadoParaElProducto: "gaming, oficina",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "reposa muñecas",
      conectividad: "usb-c",
      color: "negro",
      material: "plastico, metal",
      precio: 1169
  },
  {
      marca: "razer",
      referencia: "Ornata V3",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "Chroma RGB",
      Estilo: "membrana",
      caracteristicaEspecial: "Resistente a derrames, reposamuñecas ergonómico",
      conectividad: "usb",
      color: "negro",
      material: "plastico",
      precio: 815
  },
  {
      marca: "razer",
      referencia: "Huntsman V2",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado óptico",
      caracteristicaEspecial: "ergonómico, reposamuñecas",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 3865
  },
  {
      marca: "asus",
      referencia: "ROG Strix Scope RX",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "RGB",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "Resistente a derrames",
      conectividad: "usb",
      color: "negro",
      material: "plastico, metal",
      precio: 2960
  },
  {
      marca: "ocelot gaming",
      referencia: "OKM-S2",
      usoRecomendadoParaElProducto: "gaming, oficina",
      iluminacionDelTeclado: "arcoiris solido",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "iluminacion",
      conectividad: "usb-A",
      color: "negro",
      material: "plastico, metal",
      precio: 370
  },
  {
      marca: "logitech",
      referencia: "K835",
      usoRecomendadoParaElProducto: "gaming",
      iluminacionDelTeclado: "NO",
      Estilo: "teclado mecánico",
      caracteristicaEspecial: "teclado multimedia",
      conectividad: "usb",
      color: "gris/negro",
      material: "plastico, metal",
      precio: 1600
  }

]

let marc = prompt("ingresela marca del teclado a buscar")
let min = Number(prompt("valor minimo"))
let max = Number(prompt("valor máximo"))

const datosBusqueda = {
  marca: marc,
  referencia: "",
  minimo: min,
  maximo: max,
}

function mostrarProductos(teclados){
  teclados.forEach(teclados => {
      console.log(teclados)
  })
}

function filtrarPorMarca(teclados){
  if(datosBusqueda.marca){
      return teclados.marca === datosBusqueda.marca
  }
  return teclados;
}

function filtrarPorReferencia(teclados){
  if(datosBusqueda.referencia){
      return teclados.referencia === datosBusqueda.referencia
  }
  return teclados;
}

function filtrarPorValMinimo(teclados){
  if(datosBusqueda.minimo){
      return teclados.precio >= datosBusqueda.minimo
  }
  return teclados;
}

function filtrarPorValMax(teclados){
  if(datosBusqueda.maximo){
      return teclados.precio <= datosBusqueda.maximo
  }
  return teclados;
}

function noResultados(){
  console.log("no existen coincidencias con el valor ingresado")
}

function filtroProductos(){
  let resultado = teclados.filter(filtrarPorMarca).filter(filtrarPorReferencia)
  .filter(filtrarPorValMinimo).filter(filtrarPorValMax);
  if(resultado.length) {
      mostrarProductos(resultado)
  }else{
      noResultados()
  }
}

filtroProductos()