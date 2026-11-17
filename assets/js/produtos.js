let infoShown = "";
let infoButtons = document.querySelectorAll(".top-button");
let orderArea = document.querySelector(".ordem-area");
let filterArea = document.querySelector(".product .filters");

let filters = document.querySelectorAll(".filter-icon");


infoButtons.forEach((item)=>{
    item.addEventListener("click",()=>{
        let name = item.getAttribute("data-name");

        if(infoShown === name){
            infoShown = "";
        }else{
            infoShown = name;
        }

        renderInfo();
        
    })
})

function renderInfo(){
    orderArea.style.display = "none";
    filterArea.style.display = "none";

    switch(infoShown){
        case "order":
            orderArea.style.display = "block";
            break;
        case "filter":
            filterArea.style.display = "block";
            break;
    }
}

filters.forEach((arrowFilter)=>{
    arrowFilter.addEventListener("click",()=>{
        let item = arrowFilter.closest(".filter").querySelector(".filter-body");

        if(item.style.display === "none"){
            item.style.display = "block";
            arrowFilter.classList.remove("open-close");
        }else{
            item.style.display = "none";
            arrowFilter .classList.add("open-close");
        }
    })
})