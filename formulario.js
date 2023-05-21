
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    const campoA = parseInt(document.querySelector('#campoA').value);
    const campoB = parseInt(document.querySelector('#campoB').value);
    if (campoB > campoA) {
      alert('Formulário válido!');
      return true;
    } else {
      alert('Formulário inválido!');
      event.preventDefault();
      return false;
    }
  });

