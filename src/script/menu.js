const $menu = document.querySelector(".menu");
const $submenuContainer = document.querySelector(".menu--submenu");
const $submenu = document.querySelector(".submenu");
const $hamburger = document.querySelector(".hamburger-button ");


$submenuContainer.addEventListener("click", subMenuOnClick);
$submenuContainer.addEventListener("keydown",(key)=>{
    if(key.keyCode===13){
        subMenuOnClick()
    }
})
$hamburger.addEventListener("click", hamburgerOnClick);

function subMenuOnClick(){
    if($submenu.classList.contains("submenu--isHidden")) { 
        $submenu.classList.remove("submenu--isHidden")
        $submenu.style.maxBlockSize="20rem";
    }else{ 
        $submenu.style.maxBlockSize="0";
        $submenu.classList.add("submenu--isHidden")
    }
}

function hamburgerOnClick(){
    if($hamburger.classList.contains("hamburger-button--isOpen")) {
        $hamburger.classList.remove("hamburger-button--isOpen");
        $menu.style.display="none";
    }else{
        $hamburger.classList.add("hamburger-button--isOpen");
        $menu.style.display="inline-block";
    }
}

