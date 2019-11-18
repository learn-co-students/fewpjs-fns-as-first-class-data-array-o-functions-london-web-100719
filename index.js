function wakeDog(dogName, dogBreed) {
  let result = `Wake ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

function leashDog(dogName, dogBreed) {
  let result = `Leash ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

function walkToPark(dogName, dogBreed) {
  let result = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

function throwFrisbee(dogName, dogBreed) {
  let result = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

function walkHome(dogName, dogBreed) {
  let result = `Walk home with ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

function unleashDog(dogName, dogBreed) {
  let result = `Unleash ${dogName} the ${dogBreed}`;
  console.log();
  return result;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  return routine.map(fn => fn(dogName, dogBreed));
}
