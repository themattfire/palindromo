const texto = document.querySelector('#Text')
const enviar = document.querySelector('#Submit')
const contenedor = document.querySelector('.container')

texto.addEventListener('keyup', enterEnviar)
enviar.addEventListener('click', clickEnviar)

function palindromo() {
  const original = texto.value
  const frase = texto.value.toLowerCase().replaceAll(' ', '')
  const fraseFinal = frase.split('').reverse().toString().replaceAll(',', '')

  if (frase === fraseFinal) {
    mensajeAlerta(`Tu texto '${original}' es un palindromo`)
    texto.value = ''
  } else {
    mensajeAlerta(`Tu texto '${original}' no un palindromo, prueba con otro`, 'error')
  }
}

function clickEnviar() {
  if (texto.value === '') {
    mensajeAlerta('Por favor, introduzca una frase', 'error')
  } else {
    palindromo()
    divMensaje.remove
  }
}

function enterEnviar(e) {
  if (e.keyCode === 13) {
    palindromo()
  }
}

function mensajeAlerta(mensaje, tipo) {
  const divMensaje = document.querySelector('.divMensaje')
  if (!divMensaje) {
    const divMensaje = document.createElement('div')
    divMensaje.classList.add('divMensaje')
    console.log(divMensaje)

    if (tipo === 'error') {
      divMensaje.classList.add('error')
    } else {
      divMensaje.classList.add('success')
    }

    divMensaje.textContent = mensaje
    contenedor.appendChild(divMensaje)

    setTimeout(() => {
      divMensaje.remove()
    }, 3000)
  }
}
