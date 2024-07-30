# js-pong
reprodução do jogo pong na biblioteca p5js em JavaSript
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
  desenhaBolinha();
  movimentaBolinha();
  verificaBorda();
  desenharaquete(xraquete, yraquete);
  desenharaquete(xraqueteOponente, yraqueteOponente)
  movimentaRaquete();
  movimentaRaqueteOponente();
  colisaoRaquete();
  placar();
contabilizaPlacar();

  
}

function desenhaBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += xvelocidade;
  yBolinha += yvelocidade;
}

function verificaBorda(){
  if(xBolinha > width  || xBolinha < 0){
    xvelocidade = xvelocidade * (-1);
  }
  if(yBolinha > height  || yBolinha < 0){
    yvelocidade = yvelocidade * (-1);
  }
}
function desenharaquete(x, y){
    rect (x,y, larguraRaquete, alturaRaquete );
  }

function movimentaRaquete(){
  if (keyIsDown (UP_ARROW)){
    yraquete -= 10; 
  }
 if (keyIsDown (DOWN_ARROW)){
    yraquete += 10;
 }}
function movimentaRaqueteOponente(){
  if(keyIsDown(87)){
    yraqueteOponente -=10;
  }
  if(keyIsDown(83)){
    yraqueteOponente +=10;
  }
}
function colisaoRaquete(){
  if(xBolinha - raio <= xraquete + larguraRaquete &&
    yBolinha + raio >= yraquete && 
    yBolinha - raio <= yraquete + alturaRaquete){
    xvelocidade *= -1
  }
  
  if(xBolinha - raio >= xraqueteOponente &&
    yBolinha + raio >= yraqueteOponente && 
    yBolinha - raio <= yraqueteOponente + alturaRaquete){
    xvelocidade *= -1
  } }
function placar(){
  fill('orange');
  rect(130, 5 ,40, 25)
  rect (430, 5 , 40 , 25);
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(meuPlacar, 150, 25);
  text(placarOponente,450, 25);

}
 function contabilizaPlacar(){
   if(xBolinha - raio <= 0){
     placarOponente += 1;
     
   }
   if(xBolinha + raio >= width){
     meuPlacar +=1;
     
   }
    

    
 }
