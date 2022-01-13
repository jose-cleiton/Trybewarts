document.getElementById('top-button').addEventListener('click', () => {
  const email = document.getElementById('input-top-email');
  const texto = email.value;
  const senha = document.getElementById('input-senha');
  const textoSenha = senha.value;

  if (texto === 'tryber@teste.com' && textoSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
const butao = document.getElementById('submit-btn');
butao.disabled = true;

document.getElementById('agreement').addEventListener('click', () => {
  const checkbox = document.getElementById('agreement').checked;
  if (checkbox === true) {
    butao.disabled = false;
    butao.style.backgroundColor = 'rebeccapurple';
  } else {
    butao.disabled = true;
    butao.style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
