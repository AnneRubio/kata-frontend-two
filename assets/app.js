const markAllRead = document.querySelector(".menu-status");
const notifCount = document.querySelector(".menu-notif");

// listening an event on Mark All Read to on click change text of notifs from 3 to 0
markAllRead.addEventListener("click", function() {
  notifCount.innerText = "0";
});
