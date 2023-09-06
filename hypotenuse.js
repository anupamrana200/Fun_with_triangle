const baseValue = document.querySelectorAll(".base-value")
const calculateButton = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")


function calculateButtonClickHandler(){
   const hypotenuse = calculateHypotenuse(Number(baseValue[0].value),Number(baseValue[1].value))
   
   output.innerText = "The length of hypotenuse = "+hypotenuse
}

function calculateHypotenuse(baseA,baseB){
    if(baseA > 0 && baseB > 0){
        let b1 = baseA**2
        let b2 = baseB**2
        return Math.sqrt(b1+b2)
    } else {
        return "Base value of a triangle must be greater than 0"
    }
}

calculateButton.addEventListener('click', calculateButtonClickHandler)