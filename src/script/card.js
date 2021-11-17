const $cards = document.querySelectorAll(".card");
const $template = document.querySelector(".template");

$template.addEventListener("mouseover", fadeCardOnOver)
$template.addEventListener("mouseleave", offFadeCardOver)
$template.addEventListener("focusin", fadeCardOnOver)
$template.addEventListener("focusout", offFadeCardOver)

function fadeCardOnOver(){ 
    for(let $card of $cards) {
        $card.classList.add("card--isOff")
    }
}

function offFadeCardOver(){ 
    for(let $card of $cards) {
        $card.classList.remove("card--isOff")
    } 
}