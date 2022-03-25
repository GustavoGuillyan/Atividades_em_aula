/*
*Ler um vetor R de 5 elemntos contendo o gabarito da LOTO.
A seguir ler um vetor A de 10 elemntos contendo uma aposta.
A seguir imprima quantos pontos fez o apostador

[entrada]
4 12 34 25 17 (gabarito)
3 17 55 21 34 4 27 29 20 11 (aposta)
[Saida]
3 (pontos)
*/
aposta=[3,17,55,21,34,4,27,29,20,11];
gabarito=[4,12,34,25,17];
function loteria2(gabarito,aposta){
    let pontos = 0;
    gabarito.map(elemGabarito=>aposta.map(elemAposta=>{
        if(elemAposta == elemGabarito){
            pontos++;
        }
    }))
}
console.log("O numero de pontos acertados: ", loteria2(gabarito,aposta));

function loteria3(gabarito, aposta){
    let pontos =0;
    gabarito.map(elemGabarito=> aposta.map(elemAposta=>(elemAposta==elemGabarito)&& pontos++))
    return pontos;
}
console.log("O numero de pontos acertados: ", loteria2(gabarito,aposta));


const vet = [1,2,3,4];
const vet2 = (vet.map(elem => elem + 1));
console.log (vet.forEach(elem => elem + 1));
const vet3 = vet.forEach(elem => elem + 1);