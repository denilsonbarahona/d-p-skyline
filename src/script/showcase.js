const $heroShowcase = document.querySelector("#hero-showcase");
const $showCaseAfter = document.querySelector(".showcase-after");
const $marker = document.querySelector(".showcase-marker");
const $progressShowCase = document.querySelectorAll(".progress-showcase"); 

$heroShowcase.addEventListener("mousemove",(event)=>moveMove.call($showCaseAfter, event, true))

for(const $showCase of $progressShowCase) {
   const $progressAfter = $showCase.querySelector(".progress-transform-after")
   $showCase.addEventListener("mousemove",(event)=>moveMove.call($progressAfter, event, false))
}

function moveMove(event, ismarker){  
   const xPercentage = Math.floor((event.offsetX/this.offsetWidth)*100)
   this.style.clipPath =`polygon(${xPercentage}% 100%, 100% 100%, 100% 0, ${xPercentage}% 0)`;
   if(ismarker) $marker.style.insetInlineStart = `${xPercentage}%`;
}