function ex6(vet){
    let novoVetor = [];
    for(let i=0; i<vet.length; i++) {
      if(vet[i] > 0) {
        novoVetor.push(vet[i])
      } 
      else {
        break;
      }
    }
    let soma = 0;
    for(let i=0; i<novoVetor.length; i++) {
      if(novoVetor[i] > 5) {
        soma += novoVetor[i];
      }
    }
    console.log(soma)
  }
  ex6([1,9,2,8,3,7,4,6,5,-1])