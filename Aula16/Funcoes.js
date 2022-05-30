function parinpar(numero){
    if (numero % 2 == 0){
        return `${numero} é Par`
    }
    else{
        return `${numero} é Ímpar` 
    }
}

let numero = parinpar(5)

console.log(numero);