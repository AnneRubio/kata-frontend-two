const markAllRead = document.querySelector(".menu-status");
const notifCount = document.querySelector(".menu-notif");

// listening an event on Mark All Read so on click, text from the ul menu changes from 3 to 0
markAllRead.addEventListener("click", function() {
  notifCount.innerText = "0";
  let notifDot = document.querySelectorAll(".dot");
  notifDot.forEach((dot) => {
    dot.classList.remove("dot");
  });
});
