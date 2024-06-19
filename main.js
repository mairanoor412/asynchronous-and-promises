"use strict";
// Question # 1
Object.defineProperty(exports, "__esModule", { value: true });
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
// async function fetchGreeting (){
//     return new Promise ( (res , rej)=>{
//         setTimeout( ()=>{
//             res("Hello Mahira")
//         },2000)
//     })
// }
// fetchGreeting().then( (message)=>{
// console.log(message);
// })
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
// function simulateTask(){
//     console.log("Task started");
//     setTimeout( ()=>{
//         console.log("Task completed");
//     },1000)
// }
// simulateTask()
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
function fetch_data() {
    return new Promise((res) => {
        setTimeout(() => {
            res("Data fetched successfully");
        }, 1000);
    });
}
fetch_data().then((data) => {
    console.log(data);
});
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
// function fetchWithError(){
//     return new Promise( (res , rej)=>{
//         setTimeout( ()=>{
//             let data = Math.random() >= 0.7
//             if(data){
//                 res("Data fetched successfully")
//             }
//             else{
//                 rej("Data fetched failed")
//             }
//         },1000)
//     })
// }
// fetchWithError().then( (data)=>{
//     console.log(data);
// }).catch( (error)=>{
//     console.log(error);
// })
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.
//   function fetchData (){
//     return new Promise ( (res , rej)=>{
//       setTimeout ( ()=>{
//         res("Fetch data")
//       },1000)
//     })
//   }
// function processData(){
//   return new Promise ( (res , rej)=>{
//   setTimeout ( ()=>{
//     res("Process data")
//   },1000)
//   })
// }
// function executeSequentially(){
//   fetchData().then( (value)=>{
//     console.log(value);
//     return processData()
//   })
//   .then( (value)=>{
//     console.log(value);
//   }).catch( (error)=>{
//     console.log(error);
//   })
// }
// executeSequentially()
