
//function use

function getAmount(costId){

    return document.getElementById(costId).value;

}



document.getElementById('calculation-button').addEventListener('click', function(){

// get income value
    const incomeInputBalance = getAmount('income-input');
    const amountValue = parseFloat(incomeInputBalance);

    //get user cost & total
const foodCostInput = getAmount('food-cost');
const rentCostText = getAmount('rent-amount');
const clothsCostInput = getAmount('cloth-cost');
const totalExpensesCost = parseFloat(foodCostInput) + parseFloat(clothsCostInput)+ parseFloat(rentCostText);

//set in total Expenses

const totalCost = document.getElementById('total-expenses');
totalCost.innerText = totalExpensesCost;

const balanceText = document.getElementById('balace-total');
const balance = balanceText.innerText;
const reminingBalace = amountValue - totalExpensesCost;

balanceText.innerText = balance + reminingBalace ;

// console.log(reminingBalace);

});

document.getElementById('saving-button').addEventListener('click' , function(){

    const incomeBalance = getAmount('income-input')

    const savingInput = getAmount('saving-input');
    const savingAmount = document.getElementById('saving-amount');
    const remingBalance = document.getElementById('reming-balance');

    const saveCalc = (parseFloat(incomeBalance)* parseFloat(savingInput))/100 ; 

    savingAmount.innerText = saveCalc;

    // reming balance ........
const calcReminingBalance = parseFloat(incomeBalance) - parseFloat(saveCalc)

remingBalance.innerText = calcReminingBalance; 

    console.log(saveCalc);


})