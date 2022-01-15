
var imgArr = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

var randomNumber1 = Math.floor(Math.random()*imgArr.length);
var selected_image1 = imgArr[randomNumber1]

document.querySelector(".img1").setAttribute("src",selected_image1);

var randomNumber2 = Math.floor(Math.random()*imgArr.length);
var selected_image2 = imgArr[randomNumber2]

document.querySelector(".img2").setAttribute("src",selected_image2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins.";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins.";
}
else{
    document.querySelector("h1").innerHTML = "It's a Draw.";
}