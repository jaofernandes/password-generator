let sliderElement = document.getElementById("slider");
let buttonElement = document.getElementById("button");
let valueElement = document.getElementById("value");
let password = document.getElementById('password');
let boxPassword = document.getElementById("container-password");
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
let newPassword = "";
let copyPaste = document.getElementById('copy')


valueElement.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    valueElement.innerHTML = this.value;
};

function generatePassword(){

    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    document.getElementById("copypaste").innerHTML = "Clique para copiar sua senha!";
    boxPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copy(){
    navigator.clipboard.writeText(newPassword);
    document.getElementById("copypaste").innerHTML = "Sua senha foi copiada com sucesso!";
};

