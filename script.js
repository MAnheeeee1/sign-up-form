submit_button = document.querySelector("button");
submit_button.addEventListener("click", ()=>{
    let password = document.querySelector("#password").value;
    let comfirm_password = document.querySelector("#password-comfirm").value;
    if (password === comfirm_password){
        alert("Password Matches!")
    }
    else{
        alert("Password dont match!")
    }
})