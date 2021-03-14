//console.log("hhh")

//var titl;

//console.log(geoAccess);
//var lat;
//var lon;

self.addEventListener('push',(e)=> {
    var options = {
      body: 'We care for your safety!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'share', title: 'Share location',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Savalii!', options)
    )
  });

  self.addEventListener('notificationclick', async function(event) {
    console.log(event);
    
    if(event.action=='close')
    {
      event.notification.close();
      //sessionStorage.setItem('notificationContent','close')
    }
    else{
      //sessionStorage.setItem('notificationContent','share')
      if (clients.openWindow)
      return clients.openWindow('/user/contacts');
  
    }
  })

  