function wakeDog(name, breed) {
    return `Wake ${name} the ${breed}`;
}

function leashDog(name, breed) {
    return `Leash ${name} the ${breed}`;
}

function walkToPark(name, breed) {
    return `Walk to the park with ${name} the ${breed}`;    
}

function throwFrisbee(name, breed) {
    return `Throw the frisbee for ${name} the ${breed}`;    
}

function walkHome(name, breed) {
    return `Walk home with ${name} the ${breed}`;    
}

function unleashDog(name, breed) {
    return `Unleash ${name} the ${breed}`;   
}

let routine = [
    wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog
]

function exerciseDog(name, breed) {
    let result_array = []
    for (let i=0; i<routine.length; i++) {
        result_array.push(routine[i](name, breed));
    }
    return result_array;
}
