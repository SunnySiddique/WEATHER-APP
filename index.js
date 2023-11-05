function myFunction(){
  if(navigator.onLine){
    document.querySelector('span').innerHTML = "You're Online Now";
    document.querySelector('p').innerHTML = "Internet Is Connected";
    document.querySelector('.icon').classList.remove("offline")
    document.querySelector('.box').classList.remove("offline");
    document.querySelector('.icon').innerHTML = `<i class="bi bi-wifi"></i>`
  }
  else{
    document.querySelector('span').innerHTML = "You're Offline Now";
    document.querySelector('p').innerHTML = "Internet Is Disconnected";
    document.querySelector('.icon').classList.add("offline");
    document.querySelector('.box').classList.add("offline");
    document.querySelector('.icon').innerHTML = `<i class="bi bi-wifi-off"></i>`

  }
} 

setInterval(()=> {
  myFunction();
}, 50);