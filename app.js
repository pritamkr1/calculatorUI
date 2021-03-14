let inputScreen = document.querySelector('#input-value');
let resultScreen = document.querySelector('#result');
let screenValue = '';

let buttons = document.querySelectorAll('.btn');

//console.log(buttons);

for(item of buttons){
    item.addEventListener('click', function(eachBtn){
        //console.log(eachBtn);
        var eachValue = eachBtn.target.innerText;
       // console.log(eachvalue);
       if(eachValue == 'x'){
           eachValue = '*';
           screenValue += eachValue;
           inputScreen.value = screenValue;
       }else if(eachValue == 'AC'){
            eachValue = '';
            screenValue = eachValue;
            inputScreen.value = screenValue;
           // resultScreen.value = screenValue;
       }else if(eachValue == '='){
            inputScreen.value = eval(screenValue);
       }else{
        screenValue += eachValue;
        inputScreen.value = screenValue;
       }
    })
}