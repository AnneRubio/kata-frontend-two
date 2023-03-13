const markAllRead = document.querySelector(".menu-status");
const unreadNotif = document.querySelectorAll(".unread-notif");

// creating a function to remove all orange dots
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach(function(dot) {
    dot.classList.remove("dot");
    // dot.style.backgroundColor = "white";
  });
};

// creating a function to switch all backgrounds from blue to white
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
// specific element that is clicked so it removes the blue background of that
// clicked element only (and not of each strong elements)
function removeOneBlue(event) {
  const markOneReadThatGotClicked = event.currentTarget;
  markOneReadThatGotClicked.style.backgroundColor = "white";
  console.log(markOneReadThatGotClicked);
};

// Trying to making a function so on click on the unreadNotif div, the dot
// of the div clicked only is being removed (and not all the dots)
function removeOneDot(event) {
  const dots = document.querySelectorAll("div.dot");
  dots.forEach(function(dot) {
    dot = event.target;
    dot.classList.remove("dot");
  });
  console.log(dots);
  console.log(event.target);
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

// listening event on unreadNotif divs so on click on it runs the 3 functions
unreadNotif.forEach(function(notif) {
  notif.addEventListener("click", removeOneBlue);
  notif.addEventListener("click", decreaseCounterByOne);
  notif.addEventListener("click", removeOneDot);
});
