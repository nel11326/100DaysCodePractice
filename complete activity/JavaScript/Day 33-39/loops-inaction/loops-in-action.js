// First Example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
  const userNumberInputElement = document.getElementById("user-number");
  const enteredNumber = userNumberInputElement.value;

  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;
  }

  const outputResultElement = document.getElementById("calculated-sum");

  outputResultElement.textContent = sumUpToNumber;
  outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Second Example: highlight links

const highlightLinksButtonElement = document.querySelector(
  "#highlight-links button"
);

function highlightLinks() {
  const anchorElements = document.querySelectorAll("#highlight-links a");

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add("highlight");
  }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third Example: Display user information

const dummyUserData = {
  firstName: "Max",
  lastName: "Scharzmuller",
  age: 32,
};

const displayUserDataButtonElement =
  document.querySelector("#user-data button");

function displayUserData() {
  const outputDataElement = document.getElementById("output-user-data");

  outputDataElement.innerHTML = "";

  for (const propertyName in dummyUserData) {
    const newUserDataListItemElement = document.createElement("li");

    const outputText =
      propertyName.toUpperCase() + ": " + dummyUserData[propertyName];

    newUserDataListItemElement.textContent = outputText;

    outputDataElement.append(newUserDataListItemElement);
  }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// forth Example: Statistics Roll the Dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRoll() {
  const targetNumberInputElement =
    document.getElementById("user-target-number");

  const diceRollListElement = document.getElementById("dice-rolls");

  const enteredNumber = targetNumberInputElement.value;

  diceRollListElement.innerHTML = "";

  let hasRolledTargetNumber = false;
  let numberOfRolls = 0;

  while (!hasRolledTargetNumber) {
    const rolledNumber = rollDice();

    // if(rolledNumber == enteredNumber) {
    //     hasRolledTargetNumber = true;
    // }

    numberOfRolls++;

    const newRollListElement = document.createElement("li");

    const outputText = "Roll" + numberOfRolls + ": " + rolledNumber;

    newRollListElement.textContent = outputText;

    diceRollListElement.append(newRollListElement);

    hasRolledTargetNumber = enteredNumber == enteredNumber;
  }

  const outputTotalRollsElement = document.getElementById("output-total-rolls");
  const outputTargetNumberElement = document.getElementById(
    "output-target-number"
  );

  outputTargetNumberElement.textContent = enteredNumber;
  outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRoll);
