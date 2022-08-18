document.getElementById('update-btn').addEventListener('click', function(){
    //get Product price
    const getProductPrice = document.getElementById('product-price');
    const getProductAmountString = getProductPrice.innerText;
    const getProductAmount = parseFloat(getProductAmountString);
    //calculate discount
    const getDiscountPrice = document.getElementById('discount');
    const getDiscountAmountString = getDiscountPrice.innerText;
    const getDiscountAmount = parseFloat(getDiscountAmountString);
    
    //finding discount
    const discounstAmount = (getProductAmount / 100) * getDiscountAmount;
    //get copun code
    const copunField = document.getElementById('copun-field');
    const copunFieldText = copunField.value;
    copunField.value = '';
    if(copunFieldText !== 'DOM'){
        alert('Enter correct Copun Code');
        return;
    }
    //discount price
    const discounstTotal = getProductAmount - discounstAmount;
    getProductPrice.innerText = discounstTotal;
});