 function getInputValueById(inputid){
    const inputValue = document.getElementById(inputid);
    const inputValueAmountString = inputValue.value;
    const inputValueAmount = parseFloat(inputValueAmountString);
    inputValue.value = '';
    return inputValueAmount;
 };
 function getTextElementById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementAmountString = textElement.innerText;
    const textElementAmount = parseFloat(textElementAmountString);
    return textElementAmount;
 };
 function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
 };