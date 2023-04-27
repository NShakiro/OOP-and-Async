//promice
//Объект Promise используется для отложенных и асинхронных вычислений.
//has 2 parameters : resolve, reject - functions

// const promise1 = new Promise((resolve, reject) => {
//    setTimeout(() => {
//       resolve('everything is ok');
//    }, 3000);
// });

// promise1.then((value) => {
//    console.log(value);
//    //expected output: "foo"
// });

// // //promice methods
// // // promise1.then(() => { });    //in 'then' we operate with resolve
// // // promise1.catch();         //'catch' will called if called reject, 'then' will be ignored

// console.log(result);
// expected output: [object Promise]

//var1-----------------------------------------------
// function someFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello_1000');
//         }, 1000);
//     });
// }

//what is happening
//someFunction()->function ->{
//    value: undefined
//    onFulfill: []   //each "then" function will come here
//    onRejected:[]     // each 'catch' function will come here
// }

// someFunction()
//    .then(console.log)
//    .catch(console.error)




 //var2
function someFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello');
        }, 10);
    });
}

someFunction()
    .then(response => {
        console.log(response)
        return response + '!'
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => { console.error('this is an error') })

//another example
let str = "Hi"
let ms = 10
function delay(ms, str) {
   return new Promise((resolve) => setTimeout(() => {
      resolve(str);
   }, ms));
}

delay(ms, str).then(response => {
   console.log(response)
   return response + '!'
})
.then(console.log)