var image= new Image()
image.src = "토리토리코토리.jpg"

var canvas = null
var context = null


var eventType, keyCode;
var playerx=50,playery=50;
var keyArr = []


function init() {
    canvas = document.getElementById('gameCanvas')
    context = canvas.getContext('2d')
    requestAnimationFrame(update)
    for (let i = 0; i < 256; i++)
      ketArr.push(false);


}

function update() {
    context.clearRect(0,0 , canvas.width , canvas.height)
    context.drawImage(image,playerx,playery)



  if(keyArr[37])
  playerx -= 10

if(keyArr[38])
playery -= 10

if(keyArr[39])
  playerx += 10

if(keyArr[40])
  playery += 10



  requestAnimationFrame(update)
}




function onKeyDown(e) {
  keyArr[e.keyCode]= true
}

function onKeyUp(e) {
  keyArr[e.keyCode]= false
}

window.addEventListener('load',init)
window.addEventListener('keydown',onKeyDown )
window.addEventListener('keyup',onKeyUp )
