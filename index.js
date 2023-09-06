const angleInput = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputMessage = document.querySelector("#output-message")


function isTriangleButtonClickHandler(){
    const totalAngleValue = sumOfAngles(Number(angleInput[0].value),Number(angleInput[1].value),Number(angleInput[2].value))

    if(totalAngleValue === 180){
        outputMessage.innerText = "YES! The Angles Form a Triangle"
    } else {
        outputMessage.innerText = "No! The Angles Doesn't Form Triangle"
    }
}

function sumOfAngles(a1,a2,a3){
    return a1+a2+a3
}

isTriangleButton.addEventListener('click',isTriangleButtonClickHandler);