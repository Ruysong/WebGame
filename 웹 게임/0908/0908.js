var image= new Image()
image.src = "토리토리코토리.jpg"

var eventType, keyCode;
var playerx=50,playery=50;
var mousex,mousey;
var isDrag;
//addEventListener("type",function)
image.addEventListener('load',render)

window.addEventListener('keydown',onKeyDown)
window.addEventListener('keyup',onKeyUp)

window.addEventListener('mousedown', onMouseDown)
window.addEventListener('mouseup', onMouseUp)
window.addEventListener('mousemove', onMouseMove)
//window.addEventListener('click', onClick)
//window.addEventListener('contextmenu', onContextMenu)


function render(){
  var canvas = document.getElementById('gameCanvas')
  var context = canvas.getContext('2d')
  canvas.width = 1000;
  canvas.height = 1000;

  context.fillStyle = '#666'
  context.font =  '12px Arial'
  context.textBaseline = 'top'
  context.fillText('KeyCode is : ' +keyCode,10 ,10)

  context.fillText('eventType is : ' +eventType,10 ,25)

  context.drawImage(image,playerx,playery)

}

function onKeyDown(e) {
    keyCode = e.keyCode
    eventType= e.type

    if(e.keyCode == 37){
    playerx -= 10
  }
  if(e.keyCode == 38){
  playery -= 10
  }
  if(e.keyCode == 39){
    playerx += 10
  }
  if(e.keyCode == 40){
    playery += 10
}
    render()
}


function onKeyUp(e) {
    keyCode = e.keyCode
    eventType= e.type
    render()
}
function onMouseDown(e) {
    eventType= e.type
    mousex =e.clientX;
    mousey =e.clientY;

    isDrag = true;
      render()

}

function onMouseUp(e) {
    eventType= e.type
    mousex =e.clientX;
    mousey =e.clientY;

    isDrag = false;
      render()
}

function onMouseMove(e){
  eventType= e.type
  mousex =e.clientX;
  mousey =e.clientY;

    if(isDrag){
      playerx = mousex
      playery = mousey

    }
      render()
}
