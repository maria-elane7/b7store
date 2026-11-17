let btnDesc = document.querySelector(".des-header .btn-icon");
let descBody = document.querySelector(".des-body");
let arrowIcon = document.querySelector(".arrow-icon");

btnDesc.addEventListener("click",()=>{
    if(descBody.style.display === "none"){
        descBody.style.display = "block";
        arrowIcon.classList.remove("open-close");

    }else{
        descBody.style.display = "none";
        arrowIcon.classList.add("open-close");
    }
})