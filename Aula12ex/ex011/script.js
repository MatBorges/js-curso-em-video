function carregar(){
    var horario = document.querySelector('#hora')
    var imagem = document.querySelector('#imagem')
    var msg = document.querySelector('#msg')
    var data = new Date()
    var hora = data.getHours()   

    horario.innerText = `Agora são ${hora} horas`    

    if(hora >= 5 && hora < 12){
        imagem.src = 'img/manha.jpg'
        imagem.alt = 'Bom Dia!!'
        msg.innerText = `Tenha um Bom Dia!!`
        document.body.style.background = "rgb(255, 240, 158)"
    }else if(hora >= 12 && hora <= 18){
        imagem.src = 'img/tarde.jpg'
        imagem.alt = 'Boa Tarde!!'
        msg.innerText = `Tenha uma Boa Tarde!!`
        document.body.style.background = 'rgb(255, 144, 41)'
    }else{
        imagem.src = 'img/noite.jpg'
        imagem.alt = 'Boa Noite!!'
        msg.innerText = `Tenha uma Boa Noite!!`
        document.body.style.background = 'rgb(0, 85, 160)'
    }
}