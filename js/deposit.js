document.getElementById('btn-deposit').addEventListener('click', function(){
    //get input field deposit 
    const newDepositAmount = getInputValueById('deposit-field');
    //previous deposit
    const previousDepositAmount = getTextElementById('deposit-total');
    //calculate
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    //set the text element
    setTextElementById('deposit-total', newDepositTotal);
    //Get previous total
    const previousBalanceTotal = getTextElementById('balance-total');
    //calculate total
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //update balance
    setTextElementById('balance-total', newBalanceTotal);

});