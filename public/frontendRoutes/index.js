

const geoAccess= navigator.geolocation;
var lat;
var lon;
//console.log("geo"+geoAccess);
if(geoAccess){
    const success=async (position)=>{
        lon=await position.coords.longitude;
        lat=await position.coords.latitude;
        
    }
    navigator.geolocation.getCurrentPosition(success);
}

document.getElementById('location-btn').addEventListener('click',async (e)=>{
    e.preventDefault();
    if(!geoAccess){
        alert("Please give access to your location");
    }
    const response = await fetch('/user/location/current', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify({
              lon:lon,
              lat:lat
            }),
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          });
          const response1=await response.json();
          const err=response1.Error;
          const success=response1.Success;
          if(err)
          {
              alert(err);
          }
          if(success){
              alert(success);
          }
          
          return ;
       
})

//added

// fetch('/', {
//     method: 'GET',
//     credentials: 'include'
//   })
//     .then((response) => response.json())
//     .then((json) => {
//       console.log('Everything is fine!');
//     }).catch((err) => {
//       console.log(err);
//   });
    

    

