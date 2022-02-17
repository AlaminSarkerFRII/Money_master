
//function use

function getAmount(costId){

        return  document.getElementById(costId).value;

}

// calculation part....
document.getElementById('calculation-button').addEventListener('click', function(){

// get income value
    const incomeInputBalance = getAmount('income-input');
    const amountValue = parseFloat(incomeInputBalance);


    //get user cost & total
const foodCostInput = getAmount('food-cost');
const rentCostText = getAmount('rent-amount');
const clothsCostInput = getAmount('cloth-cost');


const totalExpensesCost = parseFloat(foodCostInput) + parseFloat(clothsCostInput)+ parseFloat(rentCostText);

console.log(totalExpensesCost);
//error handle on

 if(isNaN(parseFloat(incomeInputBalance)) || isNaN( parseFloat(foodCostInput)) || isNaN(parseFloat(clothsCostInput)) || isNaN (parseFloat(rentCostText))){

            alert ('enter a number');
       
           } else if(parseFloat(incomeInputBalance) < 0  || parseFloat(foodCostInput) < 0 || parseFloat(clothsCostInput) < 0 || parseFloat(rentCostText) < 0   ) {
               alert('enter a positive number')
           }  

           
//set in total Expenses

const totalCost = document.getElementById('total-expenses');
const balanceText = document.getElementById('balance-total');
const reminingBalance = amountValue - totalExpensesCost;
totalCost.innerText = totalExpensesCost;
balanceText.innerText = reminingBalance ;

});

document.getElementById('saving-button').addEventListener('click' , function(){

    const incomeBalance = getAmount('income-input')

    const savingInput = getAmount('saving-input');
    const savingAmount = document.getElementById('saving-amount');
    const remingBalance = document.getElementById('reming-balance');

    const saveCalc = (parseFloat(incomeBalance)* parseFloat(savingInput))/100 ; 

    savingAmount.innerText = saveCalc;

    // reming balance ........
    const balanceText = document.getElementById('balance-total');
const calcReminingBalance = parseFloat(balanceText.innerText ) - parseFloat(saveCalc)

remingBalance.innerText = calcReminingBalance; 

})