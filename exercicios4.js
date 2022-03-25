function calculaMedia(n){
    //declara vetor média como vazio inicialmente
    let vetMedia = []; 
    //percorre n e filtra somente os elementos 
    //maiores ou iguais a 6
    n.map(elem => elem >= 6 && vetMedia.push(elem))
    //define variavel para média
    let media = 0;
    //percorre o vetor de médias e faz seu somatório
    vetMedia.map(elem => media = media + elem)
    //calcula a média sobre o tamanho do vetor vetMedia
    media = media/vetMedia.length
    let p = [];
    n.map((elem,index) => {
      if(media <=elem){
        p.push(index)
      }
    })
    // console.log(n)
    console.log(media)
    console.log(p)
  
    
  }
  calculaMedia([8.5, 5, 10, 8, 3.5, 7, 9, 4, 2, 9,])