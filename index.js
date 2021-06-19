var wakeDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  return `Leash ${dogName} the ${dogBreed}`
}

var walkToPark = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  return `Walk to the park with ${dogName} the ${dogBreed}`
}

var throwFrisbee = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  return `Throw the frisbee for ${dogName} the ${dogBreed}`
}

var walkHome = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  return `Walk home with ${dogName} the ${dogBreed}`
}

var unleashDog = function(dogName="Byron", dogBreed="poodle") {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `Unleash ${dogName} the ${dogBreed}`
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

// exerciseDog solution using for loop
function exerciseDog(dog, breed) {
  const exercises = []
  for (let i = 0; i < routine.length; i++) {
    const fn = routine[i]
    const exercise = fn(dog, breed)
    exercises.push(exercise)
  }
  return exercises
}

// exerciseDog solution using forEach
// function exerciseDog(dog, breed) {
//   const exercises = []
//   routine.forEach(fn => {
//     const exercise = fn(dog, breed)
//     exercises.push(exercise)
//   })
//   return exercises
// }

// exerciseDog solution using map
// function exerciseDog(dog, breed) {
//   return routine.map(fn => fn(dog, breed))
// }
