"use strict";

/*
* Visa - 4
* MasterCard - 5
* Maestro - 6
* */

function detectCardType(e, cardLabelId) {
  var value = e.target.value
    , cardType = null
    , cardLabel = null;

  if (value.length === 0) {
    cardLabel = document.getElementById(cardLabelId);
    resetCardLabelClasses(cardLabel);
  } else if (value.length === 1) {
    cardLabel = document.getElementById(cardLabelId);
    switch (parseInt(value, 10)) {
      case 4:
        showCardLabel(cardLabel, 'visa');
        break;
      case 5:
        showCardLabel(cardLabel, 'master_card');
        break;
      case 6:
        showCardLabel(cardLabel, 'maestro');
        break;
    }
  }
}

function showCardLabel(cardLabelElm, type) {
  resetCardLabelClasses(cardLabelElm);
  cardLabelElm.classList.add(type);
}

function resetCardLabelClasses(cardLabelElm) {
  cardLabelElm.classList.remove('visa');
  cardLabelElm.classList.remove('master_card');
  cardLabelElm.classList.remove('maestro');
}

function pageInitialization (transferBtnColor, currency) {
  document.getElementById('transferBtn').style.backgroundColor = transferBtnColor;

  if (currency !== 'BYN' && currency !== 'RUB') throw new Error ('Invalid currency settings. Please check currency settings');
  [].forEach.call(document.getElementsByClassName('currency'), function(currencyElm) {
    currencyElm.innerText = currency;
    currencyElm.classList.add('visible');
  })
}

pageInitialization('cornflowerblue', 'BYN');
