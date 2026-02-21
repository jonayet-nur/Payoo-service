document.getElementById('add-money-btn').addEventListener("click", function(){
    // console.log('Clicke add money')
    // 1- get the bank 
    const bankAccount = getValueFromInput('add-money-bank');
    if(bankAccount == "Select a bank"){
        alert("Please Select a Bank");
        return;
    }
    //get the bank account number
    const account = getValueFromInput('add-money-number');
    if(account.length != 11){
        alert("Invalid Number");
        return;
    }

    //get the amount
    const amount = getValueFromInput('add-money-amount');
    const addNewBalance = getBalance() + Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin == '1020'){
        alert(`Add Money Successful from ${bankAccount} at ${new Date()}`)
        setBalance(addNewBalance);

        // 1-history container niye asbho
        const history = document.getElementById('history-container')
        // 2-new div create korbo
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
         <div class="flex items-center justify-between p-2 border-b border-base-500">
    <div>
      <p class="font-medium">Add Money</p>
      <p class="text-sm text-gray-500">
        ${bankAccount}, ${account}
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