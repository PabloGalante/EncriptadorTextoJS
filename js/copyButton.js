
async function copy() {
    try {
      await navigator.clipboard.writeText(outputText.value);
      alert('Texto Copiado');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }

copyButton.addEventListener('click', copy);