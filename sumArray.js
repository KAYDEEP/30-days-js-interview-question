// 😆 Calculate the sum of all numbers in an array.
// There are multiple approaches in JavaScript:

let arr = [1, 2, 3, 4, 5]


// Approach 1: Using a for loop

let sum = 0;
for(let i = 0; i<arr.length; i++) {
    sum += arr[i]
}
console.log("🚀 ~ file: index.js:12 ~ sum:", sum)
// Approach 2: Using the reduce() method

const redSum  = arr.reduce((acc, cur)=> acc + cur, 0)
console.log("🚀 ~ file: index.js:17 ~ redSum:", redSum)



// Approach 3: Using a forEach() loop


let sumEach = 0;

arr.forEach((num)=>{
    sumEach+= num
})
console.log("🚀 ~ file: index.js:25 ~ sumEach:", sumEach)

