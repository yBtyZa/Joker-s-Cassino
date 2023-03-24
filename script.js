var imagens = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfpc9pv9n-MlWLiL-Or3PEMTVpmY79AeDBjg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdOhvl__RqfOJUls042-IbTuaG4DuOpMuPA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREl0Dnk4aVbuGpyTMj2JcJs4ppuAnRRfA-0Q&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9uJGezlDzmXQVj9gd8bae_hQKro3J_P-CVA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2LxJUMh4OtrGWs80n7MQzGTKX1NKiO5cOQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUBH-kbUQrc8hO1mr_e96LnY7iGxOPPG0WTg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mfiMgzH7oSN2Tlo5B5Vj0b1bEVZE8xowug&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_9M2k7lUozRTz3sm_4jsL6O-uJ3a0O0UZ3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXQZGDSG01kEPc28xc0Pl1_Kf_AMNdg_aqBQ&usqp=CAU",

  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaofz9RCJbPe7KN9BP4cmhVRrohkZGKWXDQg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1IY6PqHO-bKbK85oELoF2ZGEylv94XR2ZQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRNf0uDChFf7cfE4MY5APd2nFAD8mCoP-qw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIGwa7Nx7BMNYN6xRYxhHY0bXs9kjFu0Wblg&usqp=CAU",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Joker_black_02.svg/440px-Joker_black_02.svg.png"
];
var numero = parseInt(Math.random() * 13);
var numero2 = parseInt(Math.random() * 14);
var numero3 = parseInt(Math.random() * 14);
var cartaMaquina;
var cartaJogador;

var jogador1 = {
  nome:
    "<img src='https://cdn-icons-png.flaticon.com/512/2460/2460478.png' style='max-height: 50px'>",
  moedas: 100,
  vitorias: 0,
  derrotas: 0,
  joker: 0
};
var jogador2 = [jogador1];

function sortear() {
  var cartaSorteada = numero;
  cartaJogador = imagens[cartaSorteada];
  var carta = document.getElementById("jogador");

  carta.innerHTML =
    "<img src='" +
    cartaJogador +
    "'style='border:ridge 3px #FFD700; box-shadow: 5px 5px 15px #FFD700;'>" +
    "<br/>" +
    "<button onclick='menor()' id='btn2'> Menor </button>" +
    "<button onclick='maior()' id='btn3'> Maior </button>";

  document.getElementById("btn").style.display = "none";
}

function menor() {
  var cartaSorteada = numero2;
  cartaMaquina = imagens[cartaSorteada];
  var carta = document.getElementById("maquina");
  var result = document.getElementById("resultado");
  var vitoria = document.getElementById("vitoria");
  var derrota = document.getElementById("derrota");
  carta.innerHTML =
    "<img src='" +
    cartaMaquina +
    "'style='border:ridge 3px #FFD700; box-shadow: 2px 5px 7px 5px #FFD700;'>";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";

  if (numero < numero2 && numero2 !== 13) {
    result.innerHTML =
      "Parabéns! Você ganhou:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/6177/6177875.png' style='max-height: 80px;'>" +
      "<br/>" +
      "<button onclick='menor1()'>Nova Rodada</button>";
    vitoria.innerHTML =
      "<img src='https://acegif.com/wp-content/uploads/gifs/raining-money-41.gif'>";
  } else if (numero2 == 13) {
    result.innerHTML =
      "Incrível! Você achou o Joker e ganhou:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/7453/7453070.png' style=' max-height:80px;'>" +
      "<br/>" +
      "<button onclick='jokerMenor()'>Nova Rodada</button>";
    vitoria.innerHTML =
      "<img src='https://c.tenor.com/1Ekt1-U6JpoAAAAd/magic.gif'>";
  } else {
    result.innerHTML =
      "Infelizmente você perdeu essa rodada! Você perdeu:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/6177/6177875.png' style=' max-height: 80px;'>" +
      "<br/>" +
      "<button onclick='menor2()'>Nova Rodada</button>";
    derrota.innerHTML =
      "<img src='https://i.pinimg.com/originals/8f/f9/f9/8ff9f9b0e469f751f47fc0a995a172ad.gif' style='max-height: 500px; width: 60%'>";
  }
}

function maior() {
  var cartaSorteada = numero3;
  var cartaMaquina = imagens[cartaSorteada];
  var carta = document.getElementById("maquina");
  var result = document.getElementById("resultado");
  var derrota = document.getElementById("derrota");
  carta.innerHTML =
    "<img src='" +
    cartaMaquina +
    "'style='border:ridge 3px #FFD700; box-shadow: 2px 5px 7px 5px #FFD700;'>";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("btn3").style.display = "none";

  if (numero > numero3 && numero3 !== 13) {
    result.innerHTML =
      "Parabéns! Você ganhou:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/6177/6177875.png' style='max-height: 80px;'>" +
      "<br/>" +
      "<button onclick='maior1()'>Nova Rodada</button>";
    vitoria.innerHTML =
      "<img src='https://acegif.com/wp-content/uploads/gifs/raining-money-41.gif'>";
  } else if (numero3 == 13) {
    result.innerHTML =
      "Incrível! Você achou o Joker e ganhou:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/7453/7453070.png' style=' max-height:80px;'>" +
      "<br/>" +
      "<button onclick='jokerMaior()'>Nova Rodada</button>";
    vitoria.innerHTML =
      "<img src='https://c.tenor.com/1Ekt1-U6JpoAAAAd/magic.gif'>";
  } else {
    result.innerHTML =
      "Infelizmente você perdeu essa rodada! Você perdeu:" +
      "<br/>" +
      "<img src='https://cdn-icons-png.flaticon.com/512/6177/6177875.png'  style=' max-height: 80px;'>" +
      "<br/>" +
      "<button onclick='maior2()'>Nova Rodada</button>";
    derrota.innerHTML =
      "<img src='https://i.pinimg.com/originals/8f/f9/f9/8ff9f9b0e469f751f47fc0a995a172ad.gif' style='max-height: 500px; width: 60%'>";
  }
}
function calculaMoedas(jogador) {
  var moedas = parseInt(
    jogador.vitorias * 25 - jogador.derrotas * 25 + jogador.joker * 200 + 100
  );

  return moedas;
}

jogador1.moedas = calculaMoedas(jogador1);

function exibirJogadores(jogador2) {
  var elemento = "";

  for (i = 0; i < jogador2.length; i++) {
    elemento += "<tr><td>" + jogador2[i].nome + "</td>";

    elemento += "<td>" + jogador2[i].moedas + "</td>";

    elemento += "<td>" + jogador2[i].vitorias + " </td>";

    elemento += "<td>" + jogador2[i].derrotas + "</td>";

    elemento += "<td>" + jogador2[i].joker + "</td>";

    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaMoedas");
  tabelaJogadores.innerHTML = elemento;
}
exibirJogadores(jogador2);

function menor1(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);

  document.getElementById("btn").style.display = "initial";
  var result = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  var vitoria = document.getElementById("vitoria");
  var derrota = document.getElementById("derrota");

  derrota.innerHTML = "";
  vitoria.innerHTML = "";
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  result.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.vitorias++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");
  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}
function menor2(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);

  document.getElementById("btn").style.display = "initial";
  var reset1 = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  var vitoria = document.getElementById("vitoria");
  var derrota = document.getElementById("derrota");

  derrota.innerHTML = "";
  vitoria.innerHTML = "";
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  reset1.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.derrotas++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");
  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}

function maior1(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);

  document.getElementById("btn").style.display = "initial";
  var reset1 = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  var vitoria = document.getElementById("vitoria");
  var derrota = document.getElementById("derrota");

  derrota.innerHTML = "";
  vitoria.innerHTML = "";
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  reset1.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.vitorias++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");
  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}

function maior2(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);

  document.getElementById("btn").style.display = "initial";
  var reset1 = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  var vitoria = document.getElementById("vitoria");
  var derrota = document.getElementById("derrota");

  derrota.innerHTML = "";
  vitoria.innerHTML = "";
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  reset1.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.derrotas++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");
  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}

function jokerMenor(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);

  document.getElementById("btn").style.display = "initial";

  var reset1 = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  reset1.innerHTML = "";
  vitoria.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.joker++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");
  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}

function jokerMaior(i) {
  numero = parseInt(Math.random() * 13);
  numero2 = parseInt(Math.random() * 14);
  numero3 = parseInt(Math.random() * 14);
  document.getElementById("btn").style.display = "initial";

  var reset1 = document.getElementById("resultado");
  var reset2 = document.getElementById("jogador");
  var reset3 = document.getElementById("maquina");
  reset3.innerHTML = "";
  reset2.innerHTML =
    "<img src='https://static.wixstatic.com/media/470852_8d113ff68e36434b9a7558c364cb42ac~mv2.gif'>";
  reset1.innerHTML = "";
  vitoria.innerHTML = "";

  var jogador = jogador2[i];
  jogador1.joker++;
  jogador1.moedas = calculaMoedas(jogador1);
  exibirJogadores(jogador2);

  var saldo0 = document.getElementById("saldo");

  if (jogador1.moedas < 0) {
    saldo0.innerHTML = "ATENÇÃO! SEU SALDO ESTA NEGATIVO!";
  } else {
    saldo0.innerHTML = "";
  }
}
