export const pwd = document.getElementById("pwd");
export const pwdConfirm = document.getElementById("pwd-confirm");

export function password() {
    const pwdValue = pwd.value;
    if (pwdValue.length < 6){
        pwd.style.borderColor="red"
    }else{
        pwd.style.borderColor="black"
    }
    passwordVerify()
}

export function passwordVerify() {
    let pwdValue = pwd.value; 
    let pwdConfirmValue = pwdConfirm.value;
    if(pwdValue != pwdConfirmValue || pwdConfirmValue.length < 6) {
        pwdConfirm.style.borderColor = "red"
   }else{
    console.log("Vérification Ok")
        pwdConfirm.style.borderColor = "black"
    }
}