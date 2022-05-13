function verificar() { 
    var res = document.querySelector(`div#res`) 
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = Number(document.querySelector('input#nasc').value)
    
    if(nasc <= 0 || nasc > ano){
        alert('Ano inválido!!')
    }
    else{
        var idade = ano - nasc
        var sexo = document.getElementsByName('sexo')
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sexo[0].checked){
            genero = `Homem`
            if (idade == 0 || idade <= 10) {
                img.setAttribute('src', 'img/criança-menino.png')
            }
            else  if(idade <= 16){
                img.setAttribute('src', 'img/menino.png')
            }
            else if(idade <= 50){
                img.setAttribute('src', 'img/homem.png')
            }
            else{
                img.setAttribute('src', 'img/senhor.png')
            }
        }
        else if(sexo[1].checked){
            genero = `Mulher`
            if (idade == 0 || idade <= 10) {
                img.setAttribute('src', 'img/criança-menina.png')
            }
            else  if(idade <= 16){
                img.setAttribute('src', 'img/menina.png')
            }
            else if(idade <= 50){
                img.setAttribute('src', 'img/mulher.png')
            }
            else{
                img.setAttribute('src', 'img/senhora.png')
            }
        }                
        res.innerText = `Você é ${genero} com ${idade} anos`
        res.appendChild(img)        
    }
}