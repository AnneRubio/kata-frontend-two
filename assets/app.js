let markAllRead = document.querySelector(".menu-status");
let notifCount = document.querySelector(".menu-notif");

// listening an event on Mark All Read so on click:
markAllRead.addEventListener("click", function() {
  //  text from the ul menu changes from 3 to 0
  notifCount.innerText = "0";
  //  notif dots disappear from the web page
  let notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
  //  lightblue background color from unread notifs changes to white = as read notice
  let nonReadNotif = document.querySelectorAll(".unread-notif");
  nonReadNotif.forEach((unreadNotif) => {
    unreadNotif.style.backgroundColor = "white";
  });
});

let markRead = document.querySelectorAll(".markRead");
markRead.forEach(function(element) {
  element.addEventListener("click", function() {
  let unreadNotif = document.querySelectorAll(".unread-notif");
    unreadNotif.forEach((unreadNotif) => {
    if (unreadNotif.style.backgroundColor != "white")  {
      unreadNotif.style.backgroundColor = "white";
      }
    });
  });
});

//  listening an event on active names (markRead) so on click:
// menu-notif -=1 if > 0 && lightblue backround color switches to white, if backrground == blue
