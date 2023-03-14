const markAllRead = document.querySelector(".menu-status");
const unreadNotif = document.querySelectorAll(".unread-notif");

// creating a function to remove all orange dots
function removeDots() {
  const notifDot = document.querySelectorAll(".dot");
  notifDot.forEach(function(dot) {
    dot.classList.remove("dot");
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

// define each unreadNotif div as event.currentTarget cf eventListener to target
// that specific element that is clicked so it removes the blue background and
// orange dot of that clicked element only (and not of all unread elements)
function removeOneByOne(event) {
  const theOneThatGotClicked = event.currentTarget;
  theOneThatGotClicked.style.backgroundColor = "white";
  const oneDot = theOneThatGotClicked.querySelector('.dot');
  oneDot.classList.remove("dot");
  console.log(theOneThatGotClicked);
  console.log(oneDot);
};

// turning counter as an Integer and back to String (textContent does only work
// with strings) so on click counter decreases by 1
function decreaseCounterByOne() {
let counter = document.querySelector(".menu-notif");
let notifCounter = parseInt(counter.textContent);
if (notifCounter > 0)
  notifCounter -= 1;
  counter.textContent = notifCounter.toString();
};

// listening event on unreadNotif divs so on click it runs the 2 functions
unreadNotif.forEach(function(notif) {
  notif.addEventListener("click", removeOneByOne);
  notif.addEventListener("click", decreaseCounterByOne);
});
