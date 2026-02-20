document.getElementById('login-btn').addEventListener("click" , function(){
    // console.log("login button clicked")

    // 1. get the mobile number input
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    // console.log(contactNumber);
    
    // 2.get the pin input
    const pinInput = document.getElementById('input-pin');
    const pinNumber = pinInput.value;
    // console.log(pinNumber);

    // 3.match pin & mobile number
    if(contactNumber == '01631866483' && pinNumber == '1020'){
        // 3-1 true::: alert :::> Homepage
        alert("Login Successfull")

        window.location.assign("home.html");
    }else{
         // 3-1 false::: alert :::> return
        alert("Login Failed");
        return;
    }
})