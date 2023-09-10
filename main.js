const screen = document.querySelector(".screen");
let onMemory = 0;
let result = 0;


document.querySelector(".calc-buttons").addEventListener("click", (e)=>{
    let buttonValue = e.target.innerHTML;
    if (e.target.nodeName == "BUTTON"){
        switch(buttonValue){
        case "←":
            screen.innerHTML = del(screen.innerHTML);
            console.log(screen.innerHTML, +onMemory)
            break;
        case "␡":
            screen.innerHTML = "0";
            console.log(screen.innerHTML, +onMemory)
            onMemory = 0;
            break;
        case "=":
            screen.innerHTML = math(+screen.innerHTML, onMemory, buttonValue);
            console.log(screen.innerHTML, +onMemory)
            onMemory = 0;
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            if(screen.innerHTML != "0"){
                screen.innerHTML = math(+screen.innerHTML, onMemory, buttonValue); // +screen.innerHTML converts string to number
                console.log(screen.innerHTML, +onMemory, buttonValue)
                onMemory = +screen.innerHTML;
                screen.innerHTML = "0";
                break;
            }
        default:
            if(screen.innerHTML === "0")    
                screen.innerHTML = buttonValue;
            else
                screen.innerHTML = screen.innerHTML + buttonValue;
            break;
        }
    }
});

function del (number){
    if(number.length === 1){
        number = "0";
        onMemory = "0";
    }else{
        number = number.substring(0, number.length-1)
    }
    return number;
}

function math (number, previous, operator){
    if(previous != 0){
        if(operator === "+"){
            previous = previous + number;
            console.log(`pre: ${previous} + num: ${number}` );
        }
        else if(operator === "-"){
            previous = previous - number;
            console.log(`pre: ${previous} - num: ${number}` );
        }
        else if(operator === "×"){
            previous = previous * number;
            console.log(`pre: ${previous} x num: ${number}` );
        }
        else if(operator === "÷"){
            previous = previous / number;
            console.log(`pre: ${previous} / num: ${number}` );
        }
    }else{
        previous = number;
    }
    return previous;
}
