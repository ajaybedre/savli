// const { json } = require("express");
// const { sendMessage } = require("fast-two-sms");
// const { post } = require("../routes");

//const { subscribe } = require("../routes");


// console.log("hello")

const publicVapidKey="BBrisecndVvulGWFG7L3NL7UYADyYQIrv8ZLLcNdz0TJV53DNfK57RRaepwWGd8zrgMqnMVgz2fJx1tGRoVWCmo"

async function subscribe(){
    let sw=await navigator.serviceWorker.ready;
    let push= await sw.pushManager.subscribe({
        userVisibleOnly:true,
        applicationServerKey:publicVapidKey
    })
    //console.log(push);
    const response = await fetch('/user/notify', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(push)
      });
    //console.log("key"+JSON.stringify(push))
 }

if("serviceWorker" in navigator){

addEventListener('load',async ()=>{
    let sw=navigator.serviceWorker.register('/worker.js');
    subscribe();
        
})
}else{
    console.log("No serviceWorker activated in browser");
}
// async function send(){
//    // console.log("act")
//     const register=await navigator.serviceWorker.register('/worker.js')
//     // {
//     //     scope:'/'
//     // });

//    // console.log("pu")
//     const subscription=await register.pushManager.subscribe({
//         userVisibleOnly:true,
//         applicationServerKey:urlBase64ToUint8Array(publicVapidKey)
//     })
//    //console.log("end")
  
// }

// // function urlBase64ToUint8Array(base64String) {
// //     const padding = '='.repeat((4 - base64String.length % 4) % 4);
// //     const base64 = (base64String + padding)
// //       .replace(/-/g, '+')
// //       .replace(/_/g, '/');
   
// //     const rawData = window.atob(base64);
// //     const outputArray = new Uint8Array(rawData.length);
   
// //     for (let i = 0; i < rawData.length; ++i) {
// //       outputArray[i] = rawData.charCodeAt(i);
// //     }
// //     return outputArray;
// //   }
// function urlBase64ToUint8Array(base64String) {
//     const padding = '='.repeat((4 - base64String.length % 4) % 4);
//     const base64 = (base64String + padding)
//       .replace(/-/g, '+')
//       .replace(/_/g, '/');
   
//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);
   
//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }
   
//   //const vapidPublicKey = 'BBrisecndVvulGWFG7L3NL7UYADyYQIrv8ZLLcNdz0TJV53DNfK57RRaepwWGd8zrgMqnMVgz2fJx1tGRoVWCmo';
//   //const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
   
// //   registration.pushManager.subscribe({
// //     userVisibleOnly: true,
// //     applicationServerKey: convertedVapidKey
// //   });

// //new

// subscribe();