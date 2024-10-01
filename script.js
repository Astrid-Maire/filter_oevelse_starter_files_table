const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

function isVehiclesElectric(vehicles) {
  if (vehicles.isElectric) {
    return true;
  }
}

function vehiclesPassengers(vehicles) {
  if (vehicles.passengers > 2) {
    return true;
  }
}

function vehiclesOwnedBy(vehicles) {
  if (vehicles.ownedBy === "Jonas" && vehicles.isElectric === true) {
    return true;
  }
}

function vehiclesFuel(vehicles) {
  if (vehicles.fuel === "Rugbrød" && vehicles.passengers > 1) {
    return true;
  }
}

const allElectricArr = vehicles.filter(isVehiclesElectric);
const bllElectricArr = vehicles.filter(vehiclesPassengers);
const cllElectricArr = vehicles.filter(vehiclesOwnedBy);
const dllElectricArr = vehicles.filter(vehiclesFuel);

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${areYouEmpty(each.type)}</td>
  <td>${areYouEmpty(each.fuel)}</td>
  <td>${areYouEmpty(each.passengers)}</td> 
  <td>${areYouEmpty(each.stops)}</td>
  <td>${areYouEmpty(each.ownedBy)}</td>
  <td>${areYouEmpty(each.isElectric)}</td>
  <td>${areYouEmpty(each.isTandem)}</td>
</tr>`;
  });
}

function areYouEmpty(data) {
  if (data) {
    return data;
  } else {
    return "X";
  }
}

const btnElectric = document.getElementById("is-Electric");
const btnPassengers = document.getElementById("is-Passengers");
const btnOwnedBy = document.getElementById("is-OwnedBy");
const btnFuel = document.getElementById("is-Fuel");

btnElectric.addEventListener("click", () => {
  showTheseVehicles(allElectricArr);
});

btnPassengers.addEventListener("click", () => {
  showTheseVehicles(bllElectricArr);
});

btnOwnedBy.addEventListener("click", () => {
  showTheseVehicles(cllElectricArr);
});

btnFuel.addEventListener("click", () => {
  showTheseVehicles(dllElectricArr);
});
