//CALCULATOR PROGRAM

const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}

function calculate(){
    try{
        display.value = eval(display.value); /*evaluates the value within the display*/
    }
    catch(error){
        display.value = "ERROR";
    }
}