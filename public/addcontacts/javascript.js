
'use strict';



var launchBtns = document.querySelectorAll("button[data-toggle='modal']");
for (var i=0; i < launchBtns.length; i++) {
  var launchBtn = launchBtns[i];

  // when user click launch button, show modal.
  launchBtn.addEventListener("click", function(e) {
    var selector = e.target.dataset.target;
    var modal = document.querySelector(selector);
    modal.style.display = "block";

    if (modal.dataset.isSetClose != "true") {
      var closeBtns = modal.querySelectorAll("button[data-dismiss='modal']");
      for (var j=0; j < closeBtns.length; j++) {
        var closeBtn = closeBtns[j];
        closeBtn.addEventListener("click", function(e) {
          modal.style.display = "none";
        });
      }

      modal.dataset.isSetClose = "true";
    }
  });
}


let deleteBtn = document.getElementsByClassName("delete-contact");

Array.prototype.slice.call(deleteBtn).forEach(function(item) {

  item.addEventListener("click",(e)=>{
    e.preventDefault();
    var id=e.target.value;
    console.log("hello")
    fetch('/user/contacts/delete/'+id,{
      method:'DELETE',
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     
    }).then(res=>res.json())
    .then(data=>{
      if(data.message){
        window.location.href="/user/contacts";
        alert(data.message);
      }else{
        window.location.href="/user/contacts";
      }
    }).catch(err=>{
      alert(err);
    })

   
  })
})
 