# JavaScript Functions as First Class Data: Array of Functions

## Learning Goals

- Create a JavaScript function that loops through a function `Array`

## Introduction

Since functions JavaScript are "first-class" objects, it means they can be
treated like any other data type in JavaScript (`Number`, `String`, et al.).  A
fun way to experience this truth is to load up an `Array` of `Functions` and
then call each `Function`.

### Create a JavaScript Function That Loops Through a Function `Array`

Let's create an `Array` of dog-care functions so that we can report on the
activities we take in caring for Byron the Poodle.

When this program runs, it should print out:

```
console.log("Wake Byron the poodle");
console.log("Leash Byron the poodle");
console.log("Walk to the park with Byron the poodle");
console.log("Throw the frisbee for Byron the poodle");
console.log("Walk home with Byron the poodle");
console.log("Unleash Byron the poodle");
```

Start by creating a function for every activity that you see listed above:

For example:

```js
function wakeDog() {
  console.log("Wake Byron the poodle");
}
...
```

But wait, if we write it in this way, all of our uses of this function will be
for `Byron the poodle`. Let's _generalize_ now and make each function take a
`dogName` and `dogBreed` parameter. Thus:

```js
function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
}
...
```


Continue writing "generalized" functions for functions `leashDog`,
`walkToPark`, and so on. Run `learn` to execute the tests. The tests will cue
you into the remaining expected functions that should exist.

Without further ado, let's create our "Array o' Functions!". Create a variable
called `routine`. This variable will be an `Array` all of the functions we've
defined: `wakeDog`, `leashDog`, etc.

Lastly, create the function called `exerciseDog` that will take in two
arguments:

* `dogName`
* `dogBreed`

It should then iterate over the `routine` `Array` and pass the `dogName` and
`dogBreed` to the function as it is _called_.

## Conclusion

This lab demonstrates the power of `Function`s as first-class data. We can
stack them up in `Arrays` or assign them inside of `Objects` or save them
to variables, or iterate over them. Instead of _merely_ having `Array`s of
`String`s and other familiar items, we can stuff them with _work_. And that's
nothing short of amazing!
