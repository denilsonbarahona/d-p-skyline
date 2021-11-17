const $toolsArray = document.querySelectorAll(".tools-container");

for(const $tool of $toolsArray) {
    $tool.addEventListener("mouseover",showToolShowCase)
    $tool.addEventListener("mouseleave",hideToolShowCase)
}


function showToolShowCase(event){
    const $showcase = event.target.nextElementSibling;
    const xOffset = $showcase.getBoundingClientRect().x;
    
    $showcase.style.opacity ="1";
    $showcase.style.zIndex ="2";
    if(xOffset<0) {
        $showcase.style.transform = "translateY(100%) translateX(0%)";
    }
}


function hideToolShowCase(event){ 
    const $showcase = event.target.nextElementSibling;
    $showcase.style.opacity ="0";
    $showcase.style.zIndex ="0";
 }
 