let audio = document.getElementById("audio");


function start(){
    audio.play();
    document.querySelector('.play-button').style.display = "none";
}


let leBout = document.querySelector('.elem');

var largeurPage = window.innerWidth || document.documentElement.clientWidth;
var hauteurPage = window.innerHeight || document.documentElement.clientHeight;
var diagonale = parseInt(Math.sqrt(Math.pow(largeurPage, 2) + Math.pow(hauteurPage, 2)));


let x = parseInt(Math.random() * largeurPage);
let y = parseInt(Math.random() * hauteurPage);

console.log("Largeur de la page : " + x + "px");
console.log("Hauteur de la page : " + y + "px");


leBout.style.top = `${y}px`;
leBout.style.left = `${x}px`;
console.log(leBout);

document.addEventListener('mousemove', function(e) {
    //console.log("X: " + e.x + " Y: " + e.y);
    var distance = parseInt(Math.sqrt(Math.pow((leBout.offsetLeft) - e.x, 2) + Math.pow((leBout.offsetTop) - e.y, 2)));
    let pourcentage = (distance / diagonale).toFixed(4);
    
    audio.volume =  1 - pourcentage;
    audio.playbackRate = (1 - pourcentage) + 0.5; 

    console.log(pourcentage + "%");
    console.log("volume: " + audio.volume);
    console.log("Vitesse: " + audio.playbackRate)

});

leBout.addEventListener('click',function(e){
    audio.pause();
    alert("YOU WON !");
    location.reload(true);
});