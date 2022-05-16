function contar(){
    let ini = document.querySelector('input#inicio')
    let fim = document.querySelector('input#fim')
    let passo = document.querySelector('input#passo')
    let resultado = document.querySelector('div#resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`Faltam Dados!!`)
    } else {
        resultado.innerHTML = `Contando:<br>`

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p == 0){
            alert('Passo inválido, será considerado como 1!!')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} => `            
            }
        } 
        else {            
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} => `
            }
        }

        resultado.innerHTML += `FIM!!`

    }
    // alert(`O inicio ficou ${ini}, o Fim ficou ${fim} e o passo ficou ${passo}`)
}