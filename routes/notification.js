const { json } = require('express');
const express=require('express')
const webpush=require('web-push');
const router=express.Router();

// VAPID keys should only be generated only once.
//const vapidKeys = webpush.generateVAPIDKeys();
 
//webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:ajaybedre64@gmail.com',
  process.env.publicVapidKey,
  process.env.privateVapidKey
);
// const public=vapidKeys.publicKey;
// const private=vapidKeys.privateKey;
// console.log(vapidKeys.privateKey);
// console.log(vapidKeys.publicKey);
 
// This is the same output of calling JSON.stringify on a PushSubscription
// const pushSubscription = {
//   endpoint: '/subscribe',
//   keys: {
//     auth: 'token',
//     p256dh: 'token'
//   }
// };
 
// const pushSubscription={"endpoint":"https://fcm.googleapis.com/fcm/send/d3Lb3WjBFCQ:APA91bFWkaTwySJvLPM69dsaposxAAma5ZcVyn45c-jJrQfB8od9jL4yiP_UqgmP8DK8FC2ie_-N1WkNkoJiMohAtfSYSNveg_GGi7GhJ2hgT81aS-RVq09rnnCVCKQ99P7udVlY_CG9",
// "expirationTime":null,
// "keys":{"p256dh":"BKir48rnVwVTx2AyFVBRry6cLwHj684ZA-G3M39af8tEjCDzfUkbgEJSLkFSUHtGghpWK0RT8YrlnrG_ZD9jaH8",
// "auth":"lGyO9146Ze62cNJaRx5YiA"}};
// webpush.sendNotification(pushSubscription, 'Click to share your location');

router.post('/',(req,res)=>{
    const subscription=req.body;
    res.status(201).json({});
    const payload=JSON.stringify({title:'push test'})
    webpush.sendNotification(subscription,payload)
    .catch(err=>console.log(err));
})


module.exports=router;


//3rd hain
//   const pushSubscription = {
//     endpoint: '/subscribe',
//     keys: {
//       p256dh: '< User Public Encryption Key >',
//       auth: '< User Auth Secret >'
//     }
//   };
   
  //const payload = '< Push Payload String >';
   
//   const options = {
//     gcmAPIKey: '< GCM API Key >',
//     vapidDetails: {
//       subject: '< \'mailto\' Address or URL >',
//       publicKey: '< URL Safe Base64 Encoded Public Key >',
//       privateKey: '< URL Safe Base64 Encoded Private Key >'
//     },
//     // timeout: <Number>
//     // TTL: <Number>,
//     {/* headers: {
//       '< header name >': '< header value >'
//     }, */}
//     {/* contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >',
//     proxy: '< proxy server options >',
//     agent: '< https.Agent instance >' */}
//   }
   
//   webpush.sendNotification(
//     pushSubscription,
//     payload,
//     options
//   );

  