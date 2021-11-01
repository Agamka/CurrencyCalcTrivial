var rates = [0.25, 0.22, 3.98, 0.86, 4.62, 1.16];

var PLNUSD = rates[0];
var PLNEUR = rates[1];
var USDPLN = rates[2];
var USDEUR = rates[3];
var EURPLN = rates[4];
var EURUSD = rates[5];

var btn = document.getElementById('btn');
var input = document.getElementById('amount');
var currency1 = document.getElementById('currency');
var currency2 = document.getElementById('currency-2');

var showNumber = document.getElementById('number');
var showCurrency = document.getElementById('curr');
var showResult = document.getElementById('result');
var showCurrency2 = document.getElementById('curr-2');

function calculate(event){
    event.preventDefault();
    var amount = input.value;
    var from = currency1.value;
    var to = currency2.value;
    var result = 0;
   
    if(from === 'PLN' && to === 'USD'){
       result = amount * PLNUSD;
    } else if (from === 'USD' && to === 'PLN') {
        result = amount * USDPLN;
      } else if (from === 'PLN' && to === 'EUR') {
        result = amount * PLNEUR;
      } else if (from === 'EUR' && to === 'PLN') {
        result = amount * EURPLN;
      } else if (from === 'USD' && to === 'EUR') {
        result = amount * USDEUR;
      } else if (from === 'EUR' && to === 'USD') {
        result = amount * EURUSD;
      }

    showNumber.innerHTML = amount;
    showCurrency.textContent = from;
    showResult.textContent = ' = ' + result;
    showCurrency2.textContent = to;
    
}

btn.addEventListener('click', calculate)