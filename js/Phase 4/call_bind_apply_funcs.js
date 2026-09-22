let student1 = {
    fname: 'kunal',
    lname: 'gurav',
    math: 90,
    sci: 89,
    eng: 45
}

let student2 = {
    fname: 'sakshi',
    lname: 'pawale',
    math: 60,
    sci: 79,
    eng: 48
}

let getResult = function () {
    console.log(`${this.fname} ${this.lname} got ${((this.math + this.sci + this.eng) / 3).toFixed(2)}%`)
}

// call() immediately invokes the function.
getResult.call(student1)

// apply() immediately invokes the function.
// Its second argument must be an array.
getResult.apply(student2)

// bind() does not immediately invoke the function.
// It returns a new function that can be called later.
let student1Result = getResult.bind(student1)
student1Result()

/*
Difference
call(object) — invokes the function immediately.

apply(object, []) — invokes immediately and accepts arguments as an array.

bind(object) — returns a new function for later execution.
*/