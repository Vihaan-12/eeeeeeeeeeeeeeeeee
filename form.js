class Form {
constructor(){}

display(){

var title = createElement ("h2");
title.html ("Car Racing Game!");
title.position (530,100);

var input = createInput ("enter your name");
input.position (550,250);

var button = createButton("play");
button.position(600,400);

var greeting = createElement("h3");

button.mousePressed(function (){

input.hide();
button.hide();

var name = input.value();

playerCount+= 1 

player.update(name)
player.update(playerCount)

greeting.html("hello, " + name);
greeting.position(550,250);

} )

}

}