document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get withdraw amount form input field
    const newWithdrawAmount = getInputValueById('withdraw-field');
    //get previous withdraw total
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    //calculate total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //set the text 
    setTextElementById('withdraw-total', newWithdrawTotal);
    //get previous balance total
    const previousBalanceTotal = getTextElementById('balance-total');
    //calculate total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set the text 
    setTextElementById('balance-total', newBalanceTotal);
});