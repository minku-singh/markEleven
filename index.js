const dobIp = document.querySelector("#dob");
const luckyNumberIp = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const msgP = document.querySelector("#msg");

checkNumberBtn.addEventListener("click", isLucky);

function getRightDob(dob){
    dob = dob.replaceAll("-", "");
    return Number(dob);
}

function showMsg(msg){
    msgP.style.display = "block";
    msgP.textContent = msg;
}

function isDivisible(numberDob, luckyNumber){
    if(numberDob % luckyNumber === 0){
        showMsg(`🎉${luckyNumber} is a lucky number!!`);
    }else{
        showMsg(`👎 ${luckyNumber} is not a lucky number!!`);
    }
}

function isLucky(){
    const dob = dobIp.value;
    const luckyNumber = luckyNumberIp.value;

    const numberDob = getRightDob(dob);
    isDivisible(numberDob, luckyNumber);
}