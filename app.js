function createDivs(number){

    let divSize = 960/number;
    let realSize = divSize -2;
    let totalDivs = number * number;
    
    for (let i = 1; i <= totalDivs; i ++){

        let parent = document.querySelector("#playground");

        let div = document.createElement("div");
        div.style.width = realSize + "px";
        div.style.height = realSize + "px";
        div.style.border = "1px solid black";

        parent.appendChild(div);
    }
   
}

document.addEventListener("DOMContentLoaded", (e) => {
    createDivs(60);
})