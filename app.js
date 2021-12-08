function init() {
  
    const grid = document.querySelector('.grid')
    const arr = new Array(100).fill('')
    
    let x = 20
    let y = 30
    let z = 200
    let p = 200
  
    grid.innerHTML = arr.map((_ele, i)=>{
      x++
      y++
      z++
      p++
      return `
      <svg class ="svg ${i === 0 ? 'no_margin' : '' }" width="100%" height="100%" 
      viewBox="-50 -50 600 150">
        <path class="path" d="M0.3,${x}.8c0,0,46.6-28.1,96.5-25.9c52.9,2.4,${y},36.4,${z},38.8c54.1,4.7,108.1-50.2,${x}-48.2
        c69.4,2.4,${x},128.2,${p},128.2"/>
      </svg>
      `
    }).join('')
    
    setTimeout(()=>{
      const svg = document.querySelectorAll('.svg')
  
      svg.forEach((ele,i)=>{
        ele.style.animationDelay = `${i * 0.015}s`
        ele.style.transform = `rotate(${i * 2}deg)`
        ele.style.filter = `hue-rotate(${i * 1}deg)`
        ele.style.opacity = `${1 - (i * 0.002)}`
      })
    },200)
  
  }
  
  window.addEventListener('DOMContentLoaded', init)
  
  
  