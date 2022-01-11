
document.getElementById('top-button').addEventListener('click', function () {
    let email = document.getElementById('input-email');
    let texto = email.value;
    let senha = document.getElementById('input-senha');
    let textoSenha = senha.value;
     
    if( texto === "tryber@teste.com" && textoSenha === "123456"){
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }
    
});