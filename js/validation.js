function validaUsuar() {

    if (document.login.usuario.value != "teste") {
        alert("Preencha corretamente o seu usuário")
        document.login.usuario.focus();
        return false;
    }
    
    if(document.login.password.value != "teste"){
        alert("Preencha corretamente a sua senha!")
        document.login.password.focus();
        return false;
    }
    
    return true;
}

