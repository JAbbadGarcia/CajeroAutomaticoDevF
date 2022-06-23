let currentUser = [];
var saldoAc;
var contador = 0;
var cuentas = [
  { nombre: "Mali", saldo: 200, pass: 1122 },
  { nombre: `Gera`, saldo: 290, pass: 3344 },
  { nombre: `Maui`, saldo: 67, pass: 5566 },
];

const Login = () => {
  var capturaUser = document.getElementById("userInput").value;
  var capturaPass = document.getElementById("PassInput").value;
  document.getElementById("alerta1").style.display = "none";
  currentUser = cuentas.filter(
    (user) => user.nombre == capturaUser && user.pass == capturaPass
  );
  if (currentUser.length) {
    document.getElementById("divLogin").style.display = "none";
    document.getElementById("UiUser").style.display = "flex";
    saldoAc = saldo(currentUser[0].saldo);
    document.getElementById("PSaldoAct").innerHTML = `Saldo actual: ${saldoAc}`;
  } else {
    contador++;
    document.getElementById("alerta1").style.display = "inline";
    if (contador == 3) {
      document.getElementById("alerta1").innerHTML =
        "Número maximo de intentos";
      document.getElementById("btnIngresar").style.display = "none";
    }
  }
};

const saldo = (saldoCuenta) => {
  return saldoCuenta;
};

const depositar = () => {
  var cantidadDeposito = parseInt(document.getElementById("deposito").value);
  document.getElementById("alerta2").style.display = "none";
  if (document.getElementById("deposito").value != "") {
    if (saldoAc + cantidadDeposito <= 990) {
      saldoAc = saldoAc + cantidadDeposito;
      document.getElementById(
        "PSaldoAct"
      ).innerHTML = `Saldo nuevo actual: ${saldoAc}`;
      document.getElementById(
        "DepositoSaldoNuevo"
      ).innerHTML = `Depositaste: ${cantidadDeposito}`;
      document.getElementById("deposito").value = "";
    } else {
      document.getElementById("alerta1").style.display = "inline";
      document.getElementById("alerta1").innerHTML =
        "Saldo maximo permitido $990, deposito rechazado";
      document.getElementById("deposito").value = "";
    }
  } else {
    alert("Ingresa un monto a depositar");
  }
};

const retirar = () => {
  var cantidadRetiro = parseInt(document.getElementById("deposito").value);
  document.getElementById("alerta1").style.display = "none";
  if (document.getElementById("deposito").value != "") {
    if (saldoAc - cantidadRetiro >= 10) {
      saldoAc = saldoAc - cantidadRetiro;
      document.getElementById(
        "PSaldoAct"
      ).innerHTML = `Saldo nuevo actual: ${saldoAc}`;
      document.getElementById(
        "DepositoSaldoNuevo"
      ).innerHTML = `Retiraste: ${cantidadRetiro}`;
      document.getElementById("deposito").value = "";
    } else {
      document.getElementById("alerta2").style.display = "inline";
      document.getElementById("alerta2").innerHTML =
     "El saldo minimo permitido es de: $10, Retiro declinado";
      document.getElementById("deposito").value = "";
    }
  } else {
    alert("Ingresa un monto a retirar");
  }
};
