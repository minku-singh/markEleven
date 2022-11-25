const dobIp = document.querySelector("#dob");
const luckyNumberIp = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const msgP = document.querySelector("#msg");

checkNumberBtn.addEventListener("click", isLucky);

function getRightDob(dob){
    dob = dob.replaceAll("-", "");
    return dob;
}

function showMsg(msg){
    msgP.style.display = "block";
    msgP.textContent = msg;
}

function findSum(numberDob){
    var sum = 0;
    for(i in numberDob){
        sum += Number(i);
    }
    return sum;
}

function isDivisible(numberDob, luckyNumber){
    const numberDobSum = findSum(numberDob);

    if(numberDobSum % luckyNumber === 0){
        showMsg(`🎉 ${luckyNumber} is a lucky number!!`);
    }else{
        showMsg(`👎 ${luckyNumber} is not a lucky number!!`);
    }
}

function isLucky(){
    const dob = dobIp.value;
    const luckyNumber = luckyNumberIp.value;

    if(dob === "" || luckyNumber === ""){
        showMsg("👓 Enter a valid data!!");
    }else{
        const numberDob = getRightDob(dob);
        isDivisible(numberDob, luckyNumber);
    }

}