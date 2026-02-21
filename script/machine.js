function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
}

// machine > balance
function getBalance(){
    const balanceElement = document.getElementById('balance')
    const balance = balanceElement.innerText
    return Number(balance);
}

// machine > setBalance
function setBalance(value){
    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = value;
}

function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money')
    const payBill = document.getElementById('pay-bill')
    const transaction = document.getElementById('history');

    addMoney.classList.add('hidden');
     cashOut.classList.add('hidden');
     transferMoney.classList.add('hidden');
     payBill.classList.add('hidden')
     transaction.classList.add('hidden');

     const selected = document.getElementById(id)
     selected.classList.remove('hidden');
}