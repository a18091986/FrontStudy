// setTimeout(() => {
//   console.log("Step 1");
// }, 2000);

// setTimeout(() => {
//   console.log("Step 2");
// }, 1500);

// setTimeout(() => {
//   console.log("Step 3");
// }, 1000);

function checkRooms() {
  setTimeout(() => {
    console.log("Checking rooms");
    const availableRooms = true;
    if (availableRooms) {
      console.log("Rooms are available");
    } else {
      console.log("Rooms are not available");
    }
  }, 2000);
}

function checkTickets() {
  setTimeout(() => {
    console.log("Checking tickets");
    const availableTickets = false;
    if (availableTickets) {
      console.log("Tickets are available");
    } else {
      console.log("Tickets are not available");
    }
  }, 3000);
}

checkRooms();
