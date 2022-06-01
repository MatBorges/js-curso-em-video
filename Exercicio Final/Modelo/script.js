let numero = document.querySelector('input#numeros')
let lista = document.querySelector('select#lista')
let resp = document.querySelector('div#resp')
let vetor = []


function recebeNumero(){
    if(intervalo(numero) && !noVetor(numero, vetor)){
        vetor.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} foi adicionado`
        lista.appendChild(item)
        numero.value = ''
        numero.focus()
        resp.innerHTML = ``
    }
    else{
        alert(`Número Fora do intervalo ou repetido`)
    }
}

function intervalo(numero){
    if(Number(numero.value) > 0 && Number(numero.value) <= 100){
        return true
    }
    else{
        return false
    }
}

function noVetor(numero, vetor){
    if(vetor.indexOf(Number(numero.value)) == -1){
        return false
    }
    else{
        return true
    }
}

function finalizar(){
    if(vetor.length == 0){
        alert(`Sem dados para analizar!!`)
    }
    else{
        let soma = 0
        let maior = vetor[0]
        let menor = vetor[0]

        for(i in vetor){
            if(vetor[i] > maior){
                maior = vetor[i]
            }
        }
        for(i in vetor){
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
        for(i in vetor){
            soma += vetor[i]
        }

        resp.innerHTML += `<p>Ao todo foram inseridos ${vetor.length} números</p>`
        resp.innerHTML += `<p>O maior número informado foi ${maior}</p>`
        resp.innerHTML += `<p>O menor número informado foi ${menor}</p>`
        resp.innerHTML += `<p>A soma dos números é ${soma}</p>`
        resp.innerHTML += `<p>A média dos números é ${soma / vetor.length}</p>`
    }
}