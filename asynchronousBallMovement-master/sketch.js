var gameState=0;
var database,playerCount,form,player,game;

function setup(){
    createCanvas(500,500);
    //the game database is the database of firebase
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start();
}

function draw(){
    background("white");
    
}

