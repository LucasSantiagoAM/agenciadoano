const scriptURL = 'https://script.google.com/macros/s/AKfycbwx9bYDcfcQ8yWUZ7RrV6fl6LNRn6HgWeAIuu4n4R0/dev'; // Substitua pelo URL do Apps Script

document.getElementById('landingForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Evita o comportamento padrão do formulário

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData) // Converte os dados para JSON
  })
    .then(response => response.text())
    .then(data => {
      alert('Dados enviados com sucesso!');
      console.log(data);
    })
    .catch(error => {
      console.error('Erro ao enviar os dados:', error);
    });
});
