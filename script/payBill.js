document.getElementById('pay-bill-btn').addEventListener("click", function(){
    // console.log('Clicke add money')
    // 1- get the bank 
    const payBankAccount = getValueFromInput('pay-money-bank');
    if(payBankAccount == "Select a bank"){
        alert("Please Select a Bank");
        return;
    }
    //get the bank account number
    const payAccount = getValueFromInput('pay-money-number');
    if(payAccount.length != 11){
        alert("Invalid Number");
        return;
    }

    //get the amount
    const payBillAmount = getValueFromInput('pay-money-amount');
    const addNewBalance = getBalance() - Number(payBillAmount);

    const payPin = getValueFromInput('pay-bill-pin');
    if(payPin == '1020'){
        alert(`Pay Bill Successful from ${payBankAccount} at ${new Date()}`)
        setBalance(addNewBalance);

        // 1-history container niye asbho
        const history = document.getElementById('history-container')
        // 2-new div create korbo
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="flex items-center justify-between p-4 border-b border-base-500">
    <div>
      <p class="font-medium">Pay Bill</p>
      <p class="text-sm text-gray-500">
        ${payBankAccount}, ${payBillAmount}
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
    }else{
        alert("Invalid Pin");
        return;
    }

})