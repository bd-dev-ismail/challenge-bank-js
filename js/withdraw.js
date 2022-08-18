document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get withdraw amount form input field
    const newWithdrawAmount = getInputValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('Please Enter a Valid Number');
        return;
    }
    //get previous withdraw total
    const previousWithdrawTotal = getTextElementById('withdraw-total');
    //get previous balance total
    const previousBalanceTotal = getTextElementById('balance-total');
    if(newWithdrawAmount > previousBalanceTotal){
        alert('You Have No enogh Balance');
        return;
    }
    //calculate total
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //set the text 
    setTextElementById('withdraw-total', newWithdrawTotal);
    
    //calculate total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set the text 
    setTextElementById('balance-total', newBalanceTotal);
});