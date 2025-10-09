var passengers = [];

var addPassenger = function (passengerName, passengers) {
  // if bus is empty
  if (passengers.length == 0) {
    passengers.push(passengerName); // add passenger
    return passengers; // return array & out from func
  } else {
    // check all seat from the beginning
    for (let i = 0; i < passengers.length; i++) {
      // if there is avail seat
      if (passengers[i] == undefined) {
        passengers[i] = passengerName; // add passengers to avail seat
        return passengers; // update passengers
      } else if (passengers[i] == passengerName) {
        // check the same passengers
        console.log(passengerName + " already in the bus!");
      } else if (i == passengers.length - 1) {
        // if there is no undefined seat
        passengers.push(passengerName); // add passengers to the latest seat
        return passengers; // update
      }
    }
  }
};
