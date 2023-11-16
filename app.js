function createDivs(number){

    let divSize = 480/number;
    let totalDivs = number * number;
    
    for (let i = 1; i <= totalDivs; i ++){

        let parent = document.querySelector("#playground");

        let div = document.createElement("div");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #286A96";
        div.style.backgroundColor = "#2D2D2D";

        parent.appendChild(div);
    }
   
}

document.addEventListener("DOMContentLoaded", (e) => {
    createDivs(16);
})