// // function callback(){
// //     console.log('콜백함수 호출')
// // }
// // setTimeout(callback,1000)
// // console.log('작업을 수행')

// function getUser(callback){
//     setTimeout(()=>{
//      callback([
//             {name : 'Kim', email:'kim@gmail.com'},
//             {name : 'Lee', email:'lee@gmail.com'},
//             {name : 'Park', email:'park@gmail.com'}
//         ])

//     },1000)
// }
// function findUser(name,callback){
//     getUser(users =>{
//         const user = users.find(user => user.name === name)
//         callback(user)
// })
// }
// let us = findUser('Kim',us => {console.log(us)})

// let greeting = document.querySelector('#greeting')
// greeting.addEventListener('click',sayhello())
// function sayhello(){
//     alert('안녕하세요')
// }

// let success = true
// function getUser(){
//     return new Promise((resolve, reject)=>{
//         if(success){
//             setTimeout(()=>{
//                 resolve([
//                     {name : 'Kim', email:'kim@gmail.com'},
//                     {name : 'Lee', email:'lee@gmail.com'},
//                     {name : 'Park', email:'park@gmail.com'}
//                 ])
//             },1000)
//         }else{
//             reject('실패')
//         }
//     })
// }
// let promise = getUser()
// promise
//     .then(users => users.find(user => user.name ==='Kim'))
//     .then(us => console.log(us.email))
//     .catch(error => console.log(error))
//     .finally(()=>console.log('작업완료'))

// const p1 = new Promise((resolve,reject)=> setTimeout(()=> resolve(10),2000))
// const p2 = new Promise((resolve,reject)=> setTimeout(()=> resolve(20),1000))
// const p3 = new Promise((resolve,reject)=> setTimeout(()=> reject(30),3000))
// let promises = [p1,p2,p3]

// Promise.allSettled([p1,p2,p3])
// .then(result => {
//     const fulfill = result.filter(result => result.status ==='fullfilled').map(result => result.value)
//     const total = fulfill.reduce((sum,value) => sum+value,0)
//     console.log(`결과: ${fulfill}`)
//     console.log(`합계: ${total}`)
// })

// function getUseR() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "kim@gmail.com" },
//         { name: "Lee", email: "lee@gmail.com" },
//         { name: "Park", email: "park@gmail.com" },
//       ]);
//     }, 2000);
//   });
// }
// function findUser(users) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === "Kim"));
//     }, 1000);
//   });
// }
// function getEmail(user){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(user.email)
//         },3000)
//     })
// }
// getUseR()
// .then(findUser)
// .then(getEmail)
// .then(console.log)

// const a = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(console.log('A'))
//     },1000)
// })
// const b = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(console.log('B'))
//     },2000)
// })
// Promise.all([a,b]).then(()=>(console.log('완료!')))


// let success = false
// const a = new Promise((resolve, reject)=>{
//     setTimeout((result)=>{
//         if(success){
//         resolve(5)
//         }else{
//             reject('에러')
//         }
//     },1000)
// }).then(result => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(result * 10)
//         },1500)
//     })
// }).then((result) => console.log(result)).catch((result) => console.log(result))