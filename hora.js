function carregar(){
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("foto")
    var dia = new Date()
    var hora = dia.getHours()
    var min = dia.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if ( hora > 0 && hora <= 12){
        img.src="dia.png"
    }else if( hora > 12 && hora <= 18){
        img.src="tarde.png"
    }else{
        img.src="noite.png"
    }


}
