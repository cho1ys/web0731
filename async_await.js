// let hi = async()=> '안녕'
// hi().then(console.log)

// class Greet{
//     async hi(){
//         return '안녕'
//     }
// }
// const greeter = new Greet()
// greeter.hi().then(console.log)

// async function hi(){
//     return Promise.resolve('안녕')
// }
// hi().then(console.log)

// async function hi(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('안녕')},1000)
//     })
// }
// hi().then(console.log)

// function hi() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject('error')
//         },1000)
//     })
// }
// async function display(){
//     try{
//         let result = await hi()
//         console.log(result)
//     }catch(e){
//         console.log(e)
//     }
// }
// display()

// function getUser() {
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
// function findUser(users,name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(users.find((user) =>user.name === name))
//         },1000)
//     })
// }
// function getEmail(user){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(user.email)
//         },3000)
//     })
// }
// async function getUserEmail(name){
//     let users = await getUser()
//     let user = await findUser(users, name)
//     let email = await getEmail(user)
//     return email
// }
// async function display(name){
//     let email = await getUserEmail(name)
//     console.log(email)
// }
// display('Kim')

// const mp =()=> new Promise((resolve,reject)=>{
//     resolve('val')
// })
// function* gen(){
//     let result=''
//     yield mp().then(data => {result = data})
//     yield result +'3'
// }
// const asyncf = gen()
// const val1 = asyncf.next()
// console.log(val1)
// val1.value.then(()=>{
//     console.log(asyncf.next())
// })

// function* asyncS (from = 0, to = Infinity, interval = 1, timeout = 1000){
//     let next = from
//     while(next<=to){
//         yield new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve(next)
//             },timeout)
//         })
//     next += interval
//     }
// }
// (async() => {
//     let seq = asyncS(2,10,2)
//     for await(let s of seq)
//     console.log(s)
// })()


// function* a(){
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('작업 1 완료')
//         },2000)
//     })
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('작업 2 완료')
//         },2000)    
//     })
//     yield new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('작업 3 완료')
//         },2000)    
//     })
// }
// const display = async ()=>{
//     const task = a()
//     for(let t of task){
//         const result = await t
//         console.log(result)
//     }
// }
// display()

// function userdata(userID) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const user = {
//            1: {name :'Kim', age:25},
//            2: {name :'Lee', age:30},
//            3: {name :'Jung', age:35}
//         }
//           const us = user[userID]
//           if(us){
//             resolve(us)
//           }else{
//             reject('error')
//           }
//       }, 1000);
//     });
//   }
//   async function getUser(userID){
//     try{
//         const db = await userdata(userID)
//         console.log(`${db.name}, ${db.age}`)
//     }catch(e){
//         console.log('error')
//     }
//   }
// getUser(1)