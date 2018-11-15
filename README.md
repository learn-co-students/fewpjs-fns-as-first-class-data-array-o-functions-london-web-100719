# JavaScript Fns as First Class Data: Array of Functions

## Learning Goals

- Create a JavaScript function that loops through a function array

## Introduction

To reiterate about functions in JavaScript as "first-class" objects, it can
do all the things that regular objects can do, To illustrate this concept,
we're going to create an array that contains a number of JavaScript functions.

### Create a JavaScript Function That Loops Through a Function Array

Remember our workout program from "Creating Functions in JavaScript"? Let's take
this workout program and create function that will iterate over this weekly
routine.

```
Monday:  
- Go for a five-mile run
- Pump iron

Tuesday:
- Go for a five-mile run
- Swim 40 laps

Wednesday 
- Go for a five-mile run
- Go for a five-mile run

Thursday
- Go for a five-mile run
- Pump iron

Friday
- Go for a five-mile run
- Swim 40 laps
}
```

Let's give each activity its own function, like we had done previously:
```js
function runFiveMiles() {
  console.log('Go for a five-mile run');
}
function liftWeights() {
  console.log('Pump iron');
}
function swimFortyLaps() {
  console.log('Swim 40 laps');
}
```

We're going to make our code more compact by passing in `postRunActivity`.
This function will first execute `runFiveMiles` first, since each day's exercise
routine starts with this activity. Our argument `postRunActivity` will run whichever
named function is being passed in. This will reduce the amount of repitition we have
in our code.

```js
function exerciseRoutine(postRunActivity) {
  runFiveMiles();
  postRunActivity();
}
```

Now, let's take the list of each day's workout and create a named function for each. 
Create variables for each day of the week to a variable, and set them to the corresponding
functions, like below:

```js
var Monday = function() {
  exerciseRoutine(liftWeights);
}
```

Without further ado, let's create our "Array o' Functions!". Create a variable
called `functionsArray` with your `monday` through `friday` constants as values
in the array.

Lastly, create a function called `printRoutine` that will iterate over our `functionsArray`
and print out this week's routine.

## Conclusion

This lab demonstrates another method of leveraging the power of JavaScript functions--
And there's still so much more! Can you think of ways to make writing each function
more compact (hint: "arrow functions")? Can you think of a solution to pass in 
potentially more variables and functionality to each daily routine? What about if we
decided to introduce an option 3rd activity, like a cool down, or an after-workout meal?
Think of all the possibilities as we continue to learn about various JavaScript events.
