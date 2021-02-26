
    document.getElementById('register-btn').addEventListener('click',async (e)=>{
        e.preventDefault();
        const response = await fetch('/register', {
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
            body: JSON.stringify({
                username:document.getElementById('username').value,
                contactNumber:document.getElementById('contact').value,
                password:document.getElementById('password').value,
                email:document.getElementById('email').value,
                confirmPassword:document.getElementById('confirmPassword').value
                })
          });
          const response1=await response.json();
          const message=response1.message;
          const redirectTo=response1.redirectTo;
          if(message)
          {
              alert(message);
          }
          if(redirectTo){
              window.location.href=redirectTo;
          }
          
          return ;
        });

    
   