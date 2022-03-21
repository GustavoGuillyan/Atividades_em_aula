//const fx = function(x){ return x + 1 }
//function fx = function (x){return x+1}
//console.log(fx+1)
/*function calculaIMC(peso,altura){
    return peso/(altura**2)
}
console.log(calculeIMC(75,1.75))*/

/*const calculaIMC = function(peso,altura){
    return peso/(altura**2)
}
console.log(calculeIMC(75,1.75))*/

//forma de definir funções seta, ou funções anonimas
//dado um conjunto de parametros, a gente pode executar algum calculo sem precisar definir o nome de uma função
//exemplo: 
//cont multiplica = (x,y)


const f = (x) => x+1

const vet = [1, 3, 5, 7]
vet.map (e => console.log(e))
let vet2= vet.map(e=>f(e))
//vet.map (e => console.log(f(e))
vet2.map(e=>console.log(e))
const imc = (peso,altura) => (peso/(altura**2))
console.log(imc(75,1.75))

