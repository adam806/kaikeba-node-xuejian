const add = (x, y) => x + y
const square = z => z * z

const compose = (fn1, fn2) => (...args) => fn2(fn1(...args))
    
const fn = compose(add, square)

console.log(fn(1, 2))