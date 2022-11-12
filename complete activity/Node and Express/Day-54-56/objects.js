// const job = {
//   title: "Developer",
//   location: "New York",
//   salary: 50000,
// };

// console.log(new Data().toISOString());

// const job2 = {
//   title: "Cook",
//   location: "Munich",
//   salary: 35000,
// };

// blue print of JOB

class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location}, and I earn ${this.salary}`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);

const cook = new Job("Cook", "Munich", 35000);

developer.describe();
cook.describe();

const input = ["Nel", "Tayawa"];

const firstName = input[0];
const lastName = input[1];

const [first, last] = input;

console.log(first);
console.log(last);

const job = {
  title: "Developer",
  location: "New York",
};

const { title, location } = job;
console.log(title);
