function createDivs(number){

    let divSize = 480/number;
    let totalDivs = number * number;
    let parent = document.querySelector("#playground");

    //clear previous div's
    parent.innerHTML = '';
    
    for (let i = 1; i <= totalDivs; i ++){

        let div = document.createElement("div");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #286A96";
        div.style.backgroundColor = "#2D2D2D";

        parent.appendChild(div);
    }
   
}

function changeScreenSize(){

    //read current screen size
    let screenNum = getScreenSize();

    const screenDisplayNode = document.querySelector(".size-display");

    if (screenNum < 5){
        screenNum++;
    }
    else {
        screenNum = 1;
    }

    screenDisplayNode.textContent = "";

    switch (screenNum){
        case 1: 
            screenDisplayNode.textContent = "16 x 16";
            createDivs(16);
            break;
        case 2:
            screenDisplayNode.textContent = "20 x 20";
            createDivs(20);
            break;
        case 3:
            screenDisplayNode.textContent = "10 x 10";
            createDivs(10);
            break;
        case 4:
            screenDisplayNode.textContent = "12 x 12";
            createDivs(12);
            break;
        case 5:
            screenDisplayNode.textContent = "14 x 14";
            createDivs(14);
            break;
    }


}

function getScreenSize(){

    let screenNum;
    const screenDisplayNode = document.querySelector(".size-display");
    const screenTextValue = screenDisplayNode.textContent;

    switch (screenTextValue){

        case "16 x 16": 
            screenNum = 1;
            break;
        case "20 x 20":
            screenNum = 2;
            break;
        case "10 x 10":
            screenNum = 3;
            break;
        case "12 x 12":
            screenNum = 4;
            break;
        case "14 x 14":
            screenNum = 5;
            break;
        
    }

    return screenNum;

}

//event listener for screen-size
const leftButton = document.querySelector(".left-control");
if (leftButton !== null) {
    leftButton.addEventListener("click", changeScreenSize);
}

document.addEventListener("DOMContentLoaded", (e) => {
    changeScreenSize();
})