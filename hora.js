function carregar(){
    var msg = document.getElementById("mensagem")
    var img = document.getElementById("foto")
    var dia = new Date()
    var hora = dia.getHours()
    var hora = 19
    var min = dia.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if ( hora > 0 && hora <= 12){
        img.src="bomdia.png"
        document.body.style.background = '#F2DAC4'
    }else if( hora > 12 && hora <= 18){
        img.src="boatarde.png"
        document.body.style.background = '#2192BF'
    }else{
        img.src="boanoite.png"
        document.body.style.background ='#8C2703'
    }


}
