let markAllRead = document.querySelector(".menu-status");
let notifCount = document.querySelector(".menu-notif");
let markAsRead = document.querySelectorAll(".markRead");

// creating a function to remove dots from the web page
function removeDots() {
  let notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
};

// creating a function to switch background to white if current background is blue
function removeOneBackground() {
  let nonReadNotif = document.querySelectorAll(".unread-notif");
  nonReadNotif.forEach((nonReadNotif) => {
    if (nonReadNotif.style.backgroundColor != "white");
    nonReadNotif.style.backgroundColor = "white";
  });
};

// listening an event on Mark All Read so on click:
markAllRead.addEventListener("click", function() {
  //  text from the ul menu changes from 3 to 0
  notifCount.innerText = "0";
  removeDots();
  removeOneBackground();
});

// listening an event on Mark As Read DOM elements so on click background turns white and Dot disappear
markAsRead.forEach((markRead) => markRead.addEventListener("click", removeDots)); 
markAsRead.forEach((markRead) => markRead.addEventListener("click", removeOneBackground));

//  listening an event on active names (markRead) so on click:
// menu-notif -=1 if > 0 && lightblue backround color switches to white, if backrground == blue
// markAllRead.addEventListener("click", function() {
//   //  text from the ul menu changes from 3 to 0
//   notifCount.innerText = "0";
//   //  notif dots disappear from the web page
//   let notifDot = document.querySelectorAll(".dot");
//   notifDot.forEach((dot) => {
//     dot.classList.remove("dot");
//   });
//   //  lightblue background color from unread notifs changes to white = as read notice
//   let nonReadNotif = document.querySelectorAll(".unread-notif");
//   nonReadNotif.forEach((unreadNotif) => {
//     unreadNotif.style.backgroundColor = "white";
//   });
// });
