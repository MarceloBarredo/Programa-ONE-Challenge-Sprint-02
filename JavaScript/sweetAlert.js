function alertaPerdiste () {
    Swal.fire({
        icon: 'error',
        title: '¡Mala Suerte!',
        text: 'Te quedaste sin vidas',
      })
}

function alertaGanaste () {
    Swal.fire({
        icon: 'success',
        title: 'Felicitaciones!',
        text: 'Adivinaste la palabra'
    })
}

function palabraAgregada () {
    Swal.fire({
        icon: 'success',
        title: '¡Palabra Agregada!',
      })
}



