// Con el metodo all, devuelve un array con los valores resultantes de todas las promesas, en un array
// let Promesa1 = new Promise((resolve, reject) =>{
//     resolve('Primera promesa resuelta');
// });

// let Promesa2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Segunda promesa resuelta');
//     }, 500);
// });

// let Promesa3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Error fatal en la tercera promesa');
//     }, 1000);
// });

// let Promesa4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Cuarta promesa resuelta');
//     }, 1500);
// });

// Promise.all([Promesa1,Promesa2,Promesa3,Promesa4])
//     .then((values) =>{
//         console.log('Los valores son: ', values);
//     })
//     .catch((error)=>{
//         console.log('Ocurrio un error: ',error);
//     });

//---------------------------------------------------
//Con el metodo race, devuelve unicamente el valor de la promesa que se ha cumplido antes
let Promesa2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Segunda promesa resuelta');
    }, 1000);
});

let Promesa3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Tercera promesa');
    }, 500);
});

let Promesa4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Cuarta promesa resuelta');
    }, 1500);
});

Promise.race([Promesa2,Promesa3,Promesa4])
    .then((values) =>{
        console.log('El valor es: ', values);
    })
    .catch((error)=>{
        console.log('Ocurrio un error: ',error);
    });