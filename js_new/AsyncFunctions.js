function promiseFunction() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = false;
      if (result) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
    }, 2000);
  });
}

async function startPromise() {
  try {
    console.log(await promiseFunction());
  } catch (error) {
    console.log(error);
  }
}

startPromise();

function checkRooms() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Checking rooms");
      const availableRooms = true;
      if (availableRooms) {
        resolve("Rooms are available");
      } else {
        reject("Rooms are not available");
      }
    }, 2000);
  });
}

function checkTickets(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(data);
      console.log("Checking tickets");
      const availableTickets = false;
      if (availableTickets) {
        resolve("Tickets are available");
      } else {
        reject("Tickets are not available");
      }
    }, 1000);
  });
}
function success_vacation(data) {
  console.log(data);
  console.log("Отпуск");
}
function fail_vacation(error) {
  console.log(error);
  console.log("Отпуск не состоится");
}

async function checkVacation() {
  try {
    const roomResult = await checkRooms();
    const ticketsResult = await checkTickets(roomResult);
    success_vacation(ticketsResult);
  } catch (error) {
    fail_vacation(error);
  }
}

checkVacation();
