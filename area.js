const inputValues = document.querySelectorAll(".input-values")
const calcuateBtn = document.querySelector("#calculate-btn")
const output = document.querySelector("#output") 


function calculateButtonClickHandler(){
    validateTriangle(Number(inputValues[0].value), Number(inputValues[1].value))

}

function validateTriangle(base,height){
    if(base > 0 && height > 0){
        let answer = (base*height) / 2
        output.innerText = "Area of the triangle is: "+answer
        
    } else {
        output.innerText = "Value of Base and Height must greater than 0."
    }
}


calcuateBtn.addEventListener('click', calculateButtonClickHandler)