const markAllRead = document.querySelector(".menu-status");
const markAsRead = document.querySelectorAll(".markRead");

// creating a function to remove dots from the web page
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
};

// creating a function to switch all backgrounds to white if current background is blue
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

// Not DRY code :(

// creating a function to switch background one to white if current background is blue
function removeBlueBackgroundOne() {
  const unreadNotif1 = document.querySelector(".unread-notif1");
    if (unreadNotif1.style.backgroundColor != "white");
    unreadNotif1.style.backgroundColor = "white";
};
// listening an event on notif one to change its background if white
const markRead1 = document.querySelector('.markRead1');
markRead1.addEventListener('click', removeBlueBackgroundOne);

// creating a function to switch background two to white if current background is blue
function removeBlueBackgroundTwo() {
  const unreadNotif2 = document.querySelector(".unread-notif2");
    if (unreadNotif2.style.backgroundColor != "white");
    unreadNotif2.style.backgroundColor = "white";
};
// listening an event on notif two to change its background if white
const markRead2 = document.querySelector('.markRead2');
markRead2.addEventListener('click', removeBlueBackgroundTwo);

// creating a function to switch background three to white if current background is blue
function removeBlueBackgroundThree() {
  const unreadNotif3 = document.querySelector(".unread-notif3");
    if (unreadNotif3.style.backgroundColor != "white");
    unreadNotif3.style.backgroundColor = "white";
};
// listening an event on notif Three to change its background if white
const markRead3 = document.querySelector('.markRead3');
markRead3.addEventListener('click', removeBlueBackgroundThree);


// listening an event on Mark As Read DOM elements so on click background turns white and Dot disappear (arrow function)
// markAsRead.forEach((markRead) => markRead.addEventListener("click", removeDots);
// markAsRead.forEach((markRead) => markRead.addEventListener("click", removeBlueBackground);

