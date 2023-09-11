// Find the maximum number in an array.
// There are multiple approaches in JavaScript
let arr = [12, 34,5,56,4,89]


// Approach 1: Using the Math.max() function and the spread operator
const mathMax = Math.max(...arr);
console.log("🚀 ~ file: index.js:8 ~ mathMax:", mathMax)

// Approach 2: Using the reduce() method


const maxReduce = arr.reduce((max, cur)=> (cur> max? cur: max), arr[0])
console.log("🚀 ~ file: index.js:14 ~ maxReduce:", maxReduce)



// Approach 3: Using the sort() method


const maxSort = arr.sort((a,b)=> b -a)[0] // dece
console.log("🚀 ~ file: index.js:22 ~ maxSort:", maxSort)


// Approach 4: Using the forEach() method

let max = arr[0]
// arr.forEach((item)=>{
//     if(item> max) {
//         max = item
//     }
// })

// console.log("🚀 ~ file: index.js:28 ~ max:", max)


// Approach 5: Using a for loop


for(let i =1; i<=arr.length; i++) {
    if(arr[i]> max) {
        max = arr[i]
    }
}

console.log("🚀 ~ file: index.js:28 ~ max::::", max)

























// Approach 1: Using the Math.max() function and the spread operator

// const arrMax = Math.max(...arr)
// console.log("🚀 ~ file: index.js:16 ~ arrMax:", arrMax)
// Approach 2: Using the reduce() method

// const maxReduce = arr.reduce((max, current)=> (current> max? current: max), arr[0])
// console.log("🚀 ~ file: index.js:20 ~ maxReduce:", maxReduce)

// Approach 3: Using the sort() method

// const sortMax = arr.sort((a,b)=> b-a)[0]
// console.log("🚀 ~ file: index.js:25 ~ sortMax:", sortMax)

// Approach 4: Using the forEach() method

// let max = arr[0]
// arr.forEach((num)=>{
//     if(num>max){
//         max = num
//     }
// })


// Approach 6: Using a for loop

// for(let i =1; i<=arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(arr)



