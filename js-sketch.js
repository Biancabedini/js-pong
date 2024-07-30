// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

// variaveis da velocidade 
let xvelocidade = 4;
let yvelocidade = 6;

// variaveis da raquete
let xraquete = 10;
let yraquete = 155;
let larguraRaquete = 10;
let alturaRaquete = 90;
let xraqueteOponente = 580;
let yraqueteOponente = 155;

let meuPlacar = 0;
let placarOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
