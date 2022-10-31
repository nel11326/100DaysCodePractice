let age = 32;
// alert(age);

let userName = "Max";
// console.log(userName);

let hobbies = ["Sport", "Cooking", "Reading"];
// console.log(hobbies[2]);

let job = {
  title: "Developer",
  place: "New York",
  salary: 50000,
};
// console.log(job.place);

let totalAdultYears;

function calculateAdultYears(userAge) {
  return userAge - 18;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

let person = {
  name: "max", // Property
  greet() {
    // Method
    console.log("Hello!");
  },
};

person.greet();
