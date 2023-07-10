function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são: ${hora} horas`
   
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#d8edad'

    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(247, 157, 46)'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#4a2a61'
    }
}
