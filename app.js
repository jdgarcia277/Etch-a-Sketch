function createDivs(number){ //creates board on playground to selected square grid amount ex: 16 is 16x16

    let divSize = 480/number;
    let totalDivs = number * number;
    let parent = document.querySelector("#playground");
    parent.innerHTML = ''; //clear previous divs
    for (let i = 1; i <= totalDivs; i ++){

        let div = document.createElement("div");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        div.style.boxSizing = "border-box";
        div.style.border = "1px solid #286A96";
        div.style.backgroundColor = "#2D2D2D";
        div.addEventListener("mouseover", function(){
            let colorNum = getColor();
            let color;
            switch (colorNum){
                case 1: 
                    color = "White";
                    break;
                case 2:
                    color = "Red";
                    break;
                case 3:
                    color = "Green";
                    break;
                case 4:
                    color = "Blue";
                    break;
                case 5:
                    color = "Yellow";
                    break;
            }
            div.style.backgroundColor = color
        })
        parent.appendChild(div);
    }
}

function changeScreenSize(){ //uses getScreenSize() to cycle through screen sizes when button is clicked

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

function clearScreen(){
    
    let screenNum = getScreenSize();
    switch (screenNum){
        case 1: 
            createDivs(16);
            break;
        case 2:
            createDivs(20);
            break;
        case 3:
            createDivs(10);
            break;
        case 4:
            createDivs(12);
            break;
        case 5:
            createDivs(14);
            break;
    }
}

function getScreenSize(){ //returns screenNum for what screen size says it currently is

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

function getColor(){ //returns colorNum for what display says current color is

    let colorNum;
    const colorDisplayNode = document.querySelector(".color-display");
    const colorTextValue = colorDisplayNode.textContent;
    switch (colorTextValue){
        case "White":
            colorNum = 1;
            break;
        case "Red":
            colorNum = 2;
            break;
        case "Green":
            colorNum = 3;
            break;
        case "Blue":
            colorNum = 4;
            break;
        case "Yellow":
            colorNum = 5;
            break;
    }
    return colorNum;
}

function changeColor(){ //uses getColor() to cycle through established colors
    
    let colorNum = getColor();
    const colorDisplayNode = document.querySelector(".color-display");
    if (colorNum < 5){
        colorNum++;
    }
    else {
        colorNum = 1;
    }
    colorDisplayNode.textContent = "";
    switch (colorNum){
        case 1: 
            colorDisplayNode.textContent = "White";
            break;
        case 2:
            colorDisplayNode.textContent = "Red";
            break;
        case 3:
            colorDisplayNode.textContent = "Green";
            break;
        case 4:
            colorDisplayNode.textContent = "Blue";
            break;
        case 5:
            colorDisplayNode.textContent = "Yellow";
            break;
    }
}

//event listener for screen-size
const leftButton = document.querySelector(".left-control");
if (leftButton !== null) {
    leftButton.addEventListener("click", changeScreenSize);
}

//event listener for color change
const rightButton = document.querySelector(".right-control");
if (rightButton !== null){
    rightButton.addEventListener("click", changeColor);
}

//event listener for clear button
const clearButton = document.querySelector(".middle-icon");
if(clearButton !== null){
    clearButton.addEventListener("click", clearScreen);
}
//initial loading event 
document.addEventListener("DOMContentLoaded", (e) => {
    createDivs(16);
})