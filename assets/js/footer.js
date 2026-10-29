let botaoArrow = document.querySelector(".footer-bottom .btn-icon");


botaoArrow.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})