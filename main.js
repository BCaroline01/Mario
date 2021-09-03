
let mario = document.getElementById('mario');
let solHaut = document.querySelector("#sol-haut")
let solBas = document.querySelector("#sol-bas")
let paysage = document.querySelector("#paysage")
let ciel = document.querySelector("body")

// On conserve le "décalage" des éléments
let decalage = 0

const moveSize = 24;
let playerWalk = 0;

document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowRight') {
        playerWalk = playerWalk + 1;
        modulo = playerWalk % 2;
        if (modulo === 0) {
            mario.style.backgroundImage = "url('media/mario/right_walking')";
            parallaxe()
            decalage--
        } else {
            mario.style.backgroundImage = "url('media/mario/right.png')";
        }
        mario.style.left = (mario.offsetLeft + moveSize) + "px";
    } else if (event.code == 'ArrowLeft') {
        playerWalk = playerWalk + 1;
        modulo = playerWalk % 2;
        if(modulo === 0){
            mario.style.backgroundImage = "url('media/mario/left_walking.png')";
            parallaxe()
            decalage++
          }else{
            mario.style.backgroundImage = "url('media/mario/left.png')";
          }
          mario.style.left = (mario.offsetLeft - moveSize) + "px";
      }else if (event.code == 'ArrowUp') {
        mario.style.backgroundImage = "url('media/mario/jump.png')";
        mario.style.top = (mario.offsetTop- moveSize) + "px";
      }else if (event.code == 'Space'){
        mario.style.backgroundImage = "url('media/mario/scary.png')";
      }
});


function parallaxe(){
    solBas.style.backgroundPositionX = (decalage * 14) + "px"
    solHaut.style.backgroundPositionX = (decalage * 14) + "px"
    paysage.style.backgroundPositionX = (decalage * 8) + "px"
    ciel.style.backgroundPositionX = decalage  + "px"
}