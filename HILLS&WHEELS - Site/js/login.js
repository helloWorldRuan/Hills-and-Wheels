function enter(){
    var user = in_user.value
    var pass = in_pass.value

    if (user == 'helloWorldRuan' && pass == '123'){
        window.location.href = 'dashboard.html'
    } else{
        alert('⚠ Usuário ou senha errados!')
    }
}