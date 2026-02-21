// 1st way and create machine for short time coding 
document.getElementById('cashout-btn').addEventListener("click",function(){
    const cashoutNumber = getValueFromInput('cashout-number');
     if(cashoutNumber.length != 11){
        alert("Invalid Agent Number")
        return;
    }
    const cashoutAmount = getValueFromInput('cashout-amount');

    //   get the current balance

    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;

    const currentBalance = getBalance();
    // console.log(balance);

    // calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount)

    // const newBalance = Number(balance)- Number(cashoutAmount)

    // console.log(newBalance)

     if(newBalance < 0){
        alert('Balance Insuficient')
        return
    }
    // get the cashout pin verify
    const cashoutPin = getValueFromInput('cashout-pin')
    if(cashoutPin === '1020'){
        alert("Cashout Successful")
        setBalance(newBalance);
         const history = document.getElementById('history-container')
        // 2-new div create korbo
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="flex items-center justify-between p-2 border-b border-base-500">
    <div>
      <p class="font-medium">Cashout Money</p>
      <p class="text-sm text-gray-500">
        ${cashoutNumber}, ${ cashoutAmount}
      </p>
    </div>

    <div class="text-right">
      <span class="badge badge-success badge-sm">Success</span>
      <p class="text-xs text-gray-400 mt-1">
        ${new Date().toLocaleTimeString()}
      </p>
    </div>
  </div>
        `
        // newdiv history append korbo
        history.appendChild(newHistory);
       
        // balanceElement.innerText = newBalance;
    }else{
        alert("Invalid Pin")
        return;
    }

})





// 2nd way to but this way same code repeat more best solution for 1st way


// document.getElementById('cashout-btn').addEventListener("click", function(){
    
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;

//     if(cashoutNumber.length != 11){
//         alert("Invalid Agent Number")
//         return;
//     }
    
//     // get the amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
    
//     // get the current balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;
//     // console.log(balance);

//     // calculate new balance
//     const newBalance = Number(balance)- Number(cashoutAmount)
    
//     if(newBalance < 0){
//         alert('Balance Insuficient')
//         return
//     }
    

//     // get the cashout pin verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '1020'){
//         alert("Cashout Successful")
//         // console.log( 'newbalance',newBalance);
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin")
//         return;
//     }
// })