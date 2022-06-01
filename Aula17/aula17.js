let pessoa = {
    nome:'Mateus',
    idade:25,
    sexo:'M',
    aniversario(){
        this.idade++
    }
}


console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
