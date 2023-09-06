const baseValue = document.querySelectorAll(".base-value")
const calculateButton = document.querySelector("#calculate-btn")
const output = document.querySelector("#output")


function calculateButtonClickHandler(){
   const hypotenuse = calculateHypotenuse(Number(baseValue[0].value),Number(baseValue[1].value))
}

function calculateHypotenuse(baseA,baseB){
    if(baseA > 0 && baseB > 0){
        let b1 = baseA**2
        let b2 = baseB**2
        output.innerText ="The length of hypotenuse = "+ Math.sqrt(b1+b2)
    } else {
        output.innerText = "Base value of a triangle must be greater than 0."
    }
}

calculateButton.addEventListener('click', calculateButtonClickHandler)