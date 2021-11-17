var $imagesContainer = [ ];
var $progressOneItems = [];
var progressIndex = 0;
var timeOut

const $progresOneConteiner = document.querySelector("#progress-one-container");
const $progressTwoContainer = document.querySelector("#progress-two-container");
const $progressTabList = document.querySelectorAll(".progress");
const observer = new IntersectionObserver(setObserver);

const imageProgress= {
    "progress-one-container": [
        document.querySelector("#progress-one-dark"),
        document.querySelector("#progress-one-brigth"),
        document.querySelector("#progress-one-collage"),
        document.querySelector("#progress-one-showcase")
    ] ,
    "progress-two-container":[
        document.querySelector("#progress-two-dark"),
        document.querySelector("#progress-two-brigth"),
        document.querySelector("#progress-two-collage"),
        document.querySelector("#progress-two-showcase")
    ]
}


for(const $tab of $progressTabList) {
    $tab.addEventListener("click", ()=>tabSelected($tab.dataset.index))
}

observer.observe($progresOneConteiner);
observer.observe($progressTwoContainer);

function setObserver(entries){
    
    progressIndex = 0; 
    for(const entrie of entries) {
        $imagesContainer = [...imageProgress[entrie.target.id]];
        $progressOneItems = [...entrie.target.querySelectorAll(".progress-advance")];
        clearProgress($progressOneItems.length)
        setProgressImage(progressIndex)
        if(entrie.isIntersecting) {
            if(!timeOut)
                initProgress(0);
            break;
        }else {           
            clearTimeout(timeOut)
        }
    }
}


function initProgress(progress) {

    timeOut = setTimeout(()=> setProgress($progressOneItems[progressIndex], progress),progress*90)
    if(progress>100) 
        return true; 
    else 
        return initProgress(++progress);       
}

function setProgress($element, progress) {
    if(progress === 100) {
        progressIndex+=1;
        if(progressIndex < $progressOneItems.length) {
            clearProgress($progressOneItems.length-1);
            initProgress(0);            
            setProgressImage(progressIndex)
        }else{
            clearTimeout(timeOut) 
            timeOut = null;
        }
    } 

    if($element && progress <100)
        $element.style.inlineSize =`${progress}%`;
    

    clearTimeout(timeOut) 
}

function setProgressImage(index){ 
   $imagesContainer[(index-1??0)?0:(index-1)].classList.add("progress-img-fadeOff");
   $imagesContainer[index].classList.remove("progress-img-fadeOff");
}
 

function tabSelected(tabIndex){
    clearProgress($progressOneItems.length);
    progressIndex=Number(tabIndex);
    $imagesContainer[progressIndex].classList.remove("progress-img-fadeOff");
    clearTimeout(timeOut)  
    if(!timeOut)
       initProgress(0)
}

function clearProgress(selector){
    const $ProgresstoClean = $progressOneItems.slice(0, selector);
    $ProgresstoClean.forEach(($progress, index)=>{ 
        $imagesContainer[index].classList.add("progress-img-fadeOff");
        $progress.style.inlineSize =`0%`; 
    })
}
