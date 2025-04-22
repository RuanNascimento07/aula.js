 ,
let times = require("./dados.json");

function vertime (){
  times.forEach ((time)=>{
      console.log(time.nome + "-" + time.goleiro + "(goleiro)," + time.alaDireita + "(alaDireita)," + time.alaEsquerda + "(alaEsquerda)," + time.pivo + "(pivo)," + time.fixo + "(fixo)," + time.tecnico + "(tecnico)," + time.vitorias + "(vitorias)," + time.derrotas + "(derrotas),")
  });
}
vertime();

function criarArquivo(){
  let dadosEmTexto = JSON.stringify(times);       
  const fs = require ("fs");
  fs.writeFileSync("dados.json",dadosEmTexto);
  console.log("Arquivo criado");
}


function marcarJogos(timeA, timeB, data, horario, estadio, cidade){
  let jogos = require("./jogos.json");
  jogo = {
      timeA: timeA,
      timeB: timeB,
      data: data,
      horario: horario,
      estadio: estadio,
      cidade: cidade, 
  }
  jogos.push(jogo);
  jogosJSON = JSON.stringify(jogos);
  const fs = require('fs');
  fs.writeFileSync("jogos.json", jogosJson)

}
marcarJogos("Furacao da Quadra","Leoes do Salao", "25/1/2025", 20 ,"Maracanã","Rio De Janeiro")

function mostrarJogos(){
    let jogos = require("./")
}     