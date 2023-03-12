const markAllRead = document.querySelector(".menu-status");
const unreadNotif = document.querySelectorAll(".unread-notif");

// creating a function to remove dots from the web page
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach(function(dot) {
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

// storing each <strong/> tag in a variable equal to the event.currentTarget
// to target that specific element that got clicked to remove blue background
// and dot of that clicked element only (and not all)
function removeOneBlue(event) {
  const markOneReadThatGotClicked = event.currentTarget;
  markOneReadThatGotClicked.classList.remove("dot");
  markOneReadThatGotClicked.style.backgroundColor = "white";
  console.log(markOneReadThatGotClicked);
};

function decrease() {
let counter = document.querySelector(".menu-notif");
let notifCounter = parseInt(counter.textContent);
if (notifCounter > 0)
  notifCounter -= 1;
  counter.textContent = notifCounter.toString();
};

unreadNotif.forEach(function(notif) {
  notif.addEventListener('click', removeOneBlue, decrease);
});
