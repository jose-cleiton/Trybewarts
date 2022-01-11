
document.getElementById('top-button').addEventListener('click', function () {
    let email = document.getElementById('input-top-email');
    let texto = email.value;
    let senha = document.getElementById('input-senha');
    let textoSenha = senha.value;
     
    if( texto === "tryber@teste.com" && textoSenha === "123456"){
        alert("Olá, Tryber!")
    } else {
        alert("Email ou senha inválidos.")
    }
    
});
let butao = document.getElementById('submit-btn');
     butao.disabled = true;

document.getElementById('agreement').addEventListener('click', function(){

    if(document.getElementById('agreement').value === '') {
        butao.disabled = true;
    } else{
        butao.disabled = false;
    }

})    