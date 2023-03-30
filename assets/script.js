let counter = document.getElementById('number')
let positivo = 1
let negativo = 1


function diminuir() {

    while (negativo > negativo-1){
        counter.innerHTML = `-${negativo++} `
        counter.style.color = 'red'
        break
    }

 
}

function resetar() {
    counter.innerHTML = "0"
    positivo = 1
    negativo = 1

    counter.style.color = 'black'
}

function aumentar() {
    
    while (positivo < positivo+1) {
        counter.innerHTML = `${positivo++}`
        counter.style.color = 'green'
        break
    }

}
// let max = document.getElementById('max')
// let maximo = Number(max.value)
// function definir() {

// }