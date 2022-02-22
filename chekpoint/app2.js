let autos = require("./autos");
const concesionaria = {
  autos: autos,
  buscarAuto: function (patente) {
    let autoBuscado = this.autos.filter(function (auto) {
      return auto.patente === patente;
    });

    if (autoBuscado != "") {
      return autoBuscado[0];
    } else {
      return null;
    }
  },
  venderAuto: function (patente) {
    let autoVendido = this.buscarAuto(patente);
    if (autoVendido != null) {
      autoVendido.vendido = true;
      return autoVendido;
    } else {
      return null;
    }
  },
  autosParaLaVenta: function () {
    let autosParaVenta = this.autos.filter(function (auto) {
      return auto.vendido != true;
    });
    return autosParaVenta;
  },
  autosNuevos: function () {
    let autosNuevos = this.autosParaLaVenta().filter(function (auto) {
      return auto.km < 100;
    });
    return autosNuevos;
  },
  listaDeVentas: function () {
    let autosVendidos = this.autos.filter(function (auto) {
      return auto.vendido == true;
    });
    let listaPrecio = autosVendidos.map(function (auto) {
      return auto.precio;
    });
    return listaPrecio;
  },
  totalDeVentas: function () {

    let totalDeVentas = this.listaDeVentas().reduce(function (acc, precio) {
      return acc + precio;
    },0);
    return totalDeVentas;
  },
  puedeComprar: function(auto, persona){
    if(auto.precio <= persona.capacidadDePagoTotal && auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas){
        return true;
    }
  }
};
const juan = {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
};
const alejandro = {
    nombre: "Alejandro",
    capacidadDePagoEnCuotas: 5000,
    capacidadDePagoTotal: 200000,
};
const auto = {
    nombre = "Fiat",
    modelo = "Siena",
    precio = 80000,
    cuotas = 18
}

console.log(concesionaria.puedeComprar())