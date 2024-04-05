const imgEl=document.querySelector('img')
const containerEl=document.querySelector('.container')
let scale=2


imgEl.addEventListener('mousemove',(e) => { 
    let mousePos={
        x:e.clientX,
        y:e.clientY
    }
   let box=containerEl.getBoundingClientRect()
   let xBoxPos=box.x
   let yBoxPos=box.y
    
    let xPos=mousePos.x-xBoxPos
    let yPos=mousePos.y-yBoxPos
    imgEl.style.transformOrigin=`${xPos}px ${yPos}px`
    imgEl.style.scale=scale

   
 })

 imgEl.addEventListener('mouseleave',(e) => { 
    imgEl.style.scale=1
    
  })