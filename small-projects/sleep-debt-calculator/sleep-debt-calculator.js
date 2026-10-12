function getSleepHours(day) {
  switch (day.toLowerCase()) {
    case "monday":
      return 9;
    case "tuesday":
      return 8;
    case "wednesday":
      return 8;
    case "thursday":
      return 8;
    case "friday":
      return 8;
    case "saturday":
      return 8;
    case "sunday":
      return 8;
    default:
      return 0;
  }
}

function getActualSleepHours() {
  let sleep =
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

  return sleep;
}

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You slept less than you need, you should rest more.");
    let result = idealSleepHours - actualSleepHours;
    console.log("You owe yourself " + result + " hours of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    let result = actualSleepHours - idealSleepHours;
    console.log("You got " + result + " hours than needed.");
  }
}

calculateSleepDebt();