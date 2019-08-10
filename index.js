function find(array, criteriaFn) {
  for (let i = 0; i < array.length; i++) {
    if (criteriaFn(array[i])) {
      return array[i]
    }
  }
}

find( [1,2,["a", "b"]], "Byron the Poodle")
find( [1,2,["a", "b"]], function(someNumber){ return someNumber % 2 === 0} )
find( [1,2,["a", "b"]], someNumber => someNumber % 2 === 0 )


function find(array, criteriaFn) {

  let current = array
  let next = []
 
  // hey, a `while` loop! this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  //
  // Note that we had to add on this || statement
  // if current is the number 0 it won't be run in the
  // loop. Recall your truthy / falsey rules! This is
  // a subtle bug that went unnoticed in this code for
  // many years!
  while (current || current === 0) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current
    }
 
    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
 
    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }
 
  // if we haven't
  return null
}