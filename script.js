function getPin(){
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }else{
        // console.log('Shoter pin', pin);
        return getPin();
    }
}

//Display generate pin
function generatePin(){
    const pinInput = document.getElementById('pn');
    pinInput.value = getPin();
}