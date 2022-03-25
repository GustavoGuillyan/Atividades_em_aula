function permuta(x,y){
   let novoVetor=[]
   for(var i=0; i<x.length;i++){
        novoVetor.push(x[i]);
        novoVetor.push(y[i]);
   }
   return novoVetor

}
const vetx = [1,3,5,7,9];
const vety = [0,2,4,6,8];
console.log(permuta(vety,vetx));