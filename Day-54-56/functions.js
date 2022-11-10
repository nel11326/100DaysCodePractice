function greetUser(greetingPrefix, userName = "user") {
  //   console.log("Hi " + userName + "!");
  console.log(`${greetingPrefix} ${userName}`);
}

greetUser("Hi", "Max");
greetUser("Hello");

function sumUP(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 5, 10, 11];
console.log(sumUP(...inputNumbers));

const person = { age: 32 };

function getAdultYears(p) {
  //   p.age -= 18;
  //   return p.age;
  return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
