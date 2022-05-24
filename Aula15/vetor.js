let vetor = [`Mateus`, `Lucas`, `João Pedro`]

// console.log(vetor[1])


// vetor[1] = 3

// console.log(vetor)

// vetor[1] = `Lucas`
// vetor[3] = `Maria`

// console.log(vetor)


// vetor[5] = `Não existe!!`

// console.log(vetor.length)

// console.log(vetor)


// for (let i = 0; i < vetor.length; i++) {
//     console.log(vetor[i])    
// }

for(let i in vetor){
    console.log(vetor[i])
}