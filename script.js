const char = {x:100, y:50, vx: 7, vy: 4, targetX: 100, targetY:50}
const charEl = document.getElementById("char")
let pressed

animate()

window.onclick = e => {
  char.targetX = e.clientX
  char.targetY = e.clientY
}

window.onmousemove = e => {
  if (pressed) {
    char.targetX = e.clientX
    char.targetY = e.clientY
  }
}
window.onmousedown = () => pressed = true
window.onmouseup = () => pressed = false

function animate(){
  charEl.style.top = char.y+'px'
  charEl.style.left = char.x+'px'

  const distX = char.targetX - char.x
  const distY = char.targetY - char.y
  
  const angle = Math.atan2(distY, distX)
  
  char.vx = Math.cos(angle) * 50
  char.vy = Math.sin(angle) * 50

  if (Math.abs(distX) < 1 && Math.abs(distY) < 1) {
    char.vx = 0
    char.vy = 0
  }

  char.x += char.vx
  char.y += char.vy

  requestAnimationFrame(animate)
}