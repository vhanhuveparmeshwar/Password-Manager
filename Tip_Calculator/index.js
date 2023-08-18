let billAmountInput = document.getElementById("billAmount");
let percentageTipInput = document.getElementById("percentageTip"); 
let tipamountInput = document.getElementById("tipAmount");
let totalInput = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage"); 
let errorMessage = "Please Enter a Valid Input.";

function calculateTip() {

   let billAmountInputValue = billAmountInput.value ;
   let percentageTipInputValue = percentageTipInput.value;


    if (billAmountInputValue === "") {

        errorMessageElement.textContent = errorMessage; 
    }

    else if (percentageTipInputValue === "") {

        errorMessageElement.textContent = errorMessage;

    } 

    else {

    errorMessageElement.textContent = "" ;
    let billAmount = parseInt(billAmountInputValue);
    let percentageTip = parseInt(percentageTipInputValue);
    let calculatedTip  = (percentageTip / 100) * billAmount;
    let calculatedTotal = billAmount + calculatedTip;
    tipamountInput.value = calculatedTip;
    totalInput.value  = calculatedTotal;
    }
    
}    