document.getElementById('send-money-btn').addEventListener("click",function(){
    const sendMoneyNumber = getValueFromInput('send-money-number');
     if(sendMoneyNumber.length != 11){
        alert("Invalid  Number")
        return;
    }
    const sendMoneyAmount = getValueFromInput('send-money-amount');

    //   get the current balance

    

    const currentBalance = getBalance();
    // console.log(balance);

    // calculate new balance
    const newBalance = currentBalance - Number(sendMoneyAmount)

   
     if(newBalance < 0){
        alert('Balance Insuficient')
        return
    }
    // get the cashout pin verify
    const sendMoneyPin = getValueFromInput('send-money-pin')
    if(sendMoneyPin === '1020'){
        alert("Send Money Successful")
        setBalance(newBalance);
         const history = document.getElementById('history-container')
        // 2-new div create korbo
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="flex items-center justify-between p-4 border-b border-base-500">
    <div>
      <p class="font-medium">Send Money</p>
      <p class="text-sm text-gray-500">
        ${sendMoneyNumber}, ${sendMoneyAmount}
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

