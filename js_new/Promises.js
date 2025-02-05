// const checkRooms = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Checking rooms");
//     const availableRooms = true;
//     if (availableRooms) {
//       resolve("Rooms are available");
//     } else {
//       reject("Rooms are not available");
//     }
//   }, 2000);
// });

// checkRooms
//   .then(function (data) {
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         console.log(data);
//         console.log("Checking tickets");
//         const availableTickets = true;
//         if (availableTickets) {
//           resolve("Tickets are available");
//         } else {
//           reject("Tickets are not available");
//         }
//       }, 1000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (error) {
//     console.log("Catch");
//     console.log(error);
//   });




  checkRooms().then(checkTickets).then(success).catch(error);

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
  function success(data) {
    console.log(data);
    console.log("Отпуск");
  }
  function error(error) {
    console.log(error);
    console.log("Отпуск не состоится");
  }