let PrimeraPromesa = new Promise ((resolve,reject)=>{
    resolve('Primera promesa exitosa');
});

let SegundaPromesa = new Promise ((resolve,reject)=>{
    resolve('Segunda promesa exitosa');
});

let UltimaPromesa = new Promise ((resolve,reject)=>{
    reject('Ultima promesa exitosa');
});

PrimeraPromesa
    .then(
        response =>{
            console.log(response);
            return SegundaPromesa;
        }
    )
    .then(
        ValorSegundaPromesa =>{
            console.log(ValorSegundaPromesa);
            return UltimaPromesa
        }
    )
    .then(
        ValorUltimaPromesa =>{
            console.log(ValorUltimaPromesa);
        }
    )
    .catch(
       error =>{
           console.log('error', error);
           throw error;
       }
    )