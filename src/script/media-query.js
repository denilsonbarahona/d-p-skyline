const $menu = document.querySelector(".menu");
const media = window.matchMedia("(min-width: 1024px)");
media.onchange  = checkMediaQuery;

function checkMediaQuery(e){
   if(e.matches) {
        $menu.style.display="inline-block";
   }else{
        $menu.style.display="none";
   }
}

