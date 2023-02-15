// listening an event on Mark All Read so on click:
//  text from the ul menu changes from 3 to 0
//  notif dots disappear from the web page
//  lightblue background color from unread notifs changes to white = as read notice
const markAllRead = document.querySelector(".menu-status");
const notifCount = document.querySelector(".menu-notif");
markAllRead.addEventListener("click", function() {
  notifCount.innerText = "0";
  let notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
  let nonReadNotif = document.querySelectorAll(".unread-notif");
  nonReadNotif.forEach((unreadNotif) => {
    unreadNotif.style.backgroundColor = "white";
  });
});


let counter = 0;

