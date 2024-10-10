function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minute = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minute} minutos.`
if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src= 'fotomanha.jpg.jpg'
    
} else if (hora >= 12 && hora < 18) {
    // Boa Tarde 
img.src= 'fototarde.jpg.jpg'

} else{
    //Boa Noite 
    img.src= 'fotonoite.jpg.jpg'
}









}