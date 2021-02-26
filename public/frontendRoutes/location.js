//console.log("hello");
// document.getElementById('login-btn').addEventListener('click',async (e)=>{
//     e.preventDefault();
//     const response = await fetch('/login', {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//           'Content-Type': 'application/json'
//           // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify({
//             username:document.getElementById('username').value,
//             password:document.getElementById('password').value,
//         })
//       });
//       const response1=await response.json();
//       const message=response1.message;
//       //const token=response1.token;
//       //const isAuthorised=response1.isAuthorised;
//       if(message)
//       {
//           alert(message);
//       }
//       if(token){
//           window.location.href="/";
//       }
      
//       return ;
   
// })