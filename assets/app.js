const markAllRead = document.querySelector(".menu-status");
const markAsRead = document.querySelectorAll(".markRead");

// creating a function to remove dots from the web page
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
};

// creating a function to switch background to white if current background is blue
function removeBlueBackground() {
  const nonReadNotif = document.querySelectorAll(".unread-notif");
  nonReadNotif.forEach((nonReadNotif) => {
    if (nonReadNotif.style.backgroundColor != "white");
    nonReadNotif.style.backgroundColor = "white";
  });
};

// listening an event on Mark All Read so on click:
markAllRead.addEventListener("click", function() {
  //  text from the ul menu changes from 3 to 0
  const notifCount = document.querySelector(".menu-notif");
  notifCount.innerText = "0";
  removeDots();
  removeBlueBackground();
});

// listening an event on Mark As Read DOM elements so on click background turns white and Dot disappear (arrow function)
markAsRead.forEach((markRead) => markRead.addEventListener("click", removeDots));
markAsRead.forEach((markRead) => markRead.addEventListener("click", removeBlueBackground));

//  listening an event on active names (markAsRead) so on click:
// menu-notif -=1 if > 0 && lightblue backround color switches to white, if backrground === blue
