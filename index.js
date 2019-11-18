function wakeDog(dogName, dogBreed) {
   const value = `Wake ${dogName} the ${dogBreed}`;
   console.log(value)
   return value
  }
function leashDog(dogName, dogBreed) {
    const value = `Leash ${dogName} the ${dogBreed}`;
    console.log(value)
    return value
  }
function walkToPark(dogName, dogBreed) {
    const value = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(value)
    return value
  }
function throwFrisbee(dogName, dogBreed) {
    const value = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(value)
    return value
  }
function unleashDog(dogName, dogBreed) {
   const value = `Unleash ${dogName} the ${dogBreed}`;
   console.log(value)
   return value
  }
function walkHome(dogName, dogBreed) {
    const value = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(value)
    return value
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed){
    const returnArray = []
    for (let i=0; i < routine.length; i++){
        returnArray[i] = routine[i](dogName, dogBreed)
    }

    return returnArray

}