const markAllRead = document.querySelector(".menu-status");
const unreadNotif = document.querySelectorAll(".unread-notif");

// creating a function to remove orange dots
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach(function(dot) {
    // dot.classList.remove("dot");
    dot.style.backgroundColor = "white";
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

// storing each <strong/> tag as an event.currentTarget constant to target that
// specific element that is clicked so it removes the blue background and orange
// dot of that clicked element only (and not of each strong elements)
function removeOneBlue(event) {
  const markOneReadThatGotClicked = event.currentTarget;
  markOneReadThatGotClicked.classList.remove("dot");
  markOneReadThatGotClicked.style.backgroundColor = "white";
  // console.log(markOneReadThatGotClicked);
};

// turning counter as an Integer and back to String (textContent does only work
// with strings) so on clik counter decreases by 1
function decreaseCounterByOne() {
let counter = document.querySelector(".menu-notif");
let notifCounter = parseInt(counter.textContent);
if (notifCounter > 0)
  notifCounter -= 1;
  counter.textContent = notifCounter.toString();
};

unreadNotif.forEach(function(notif) {
  notif.addEventListener("click", removeOneBlue);
  notif.addEventListener("click", decreaseCounterByOne);
});
