function carregar(){
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("foto")
    var dia = new Date()
    var hora = dia.getHours()
    var min = dia.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if ( hora > 0 && hora <= 12){
        img.src="dia.png"
        document.body.style.background = '#F2CD5C'
    }else if( hora > 12 && hora <= 18){
        img.src="tarde.png"
        document.body.style.background = '#F2F2F2'
    }else{
        img.src="noite.png"
        document.body,style.background ='#131240'
    }


}
