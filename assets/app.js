let markAllRead = document.querySelector(".menu-status");
let notifCount = document.querySelector(".menu-notif");
let markAsRead = document.querySelectorAll(".markRead");

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

// faire une fonction pour que le background soit enlevé 1 par 1 et non pour chaque item. A corriger ici
function removeOneBackground (e) {
  let nonReadNotif = document.querySelectorAll(".unread-notif");
  nonReadNotif.forEach((nonReadNotif) => {
    nonReadNotif.style.backgroundColor = "white";
    if (this.style.backgroundColor != "white");
  });
};

markAsRead.forEach((markRead) => markRead.addEventListener("click", removeOneBackground));

  // let unreadNotif = document.querySelectorAll(".unread-notif");
  //   unreadNotif.forEach((unreadNotif) => {
  //   if (unreadNotif.style.backgroundColor != "white")  {
  //     unreadNotif.style.backgroundColor = "white";
  //     }
  //   });


//  listening an event on active names (markRead) so on click:
// menu-notif -=1 if > 0 && lightblue backround color switches to white, if backrground == blue
