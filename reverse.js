// Reverse an array.
// There are multiple approaches to reverse an array in JavaScript

let arr = [1,2,3,4,5,6]

// Approach 1: Using the reverse() method
const reverseMethod = arr.reverse();

// Approach 2: Using the spread operator
const spredArr = [...arr].reverse().join('')

// Approach 3: Using the map() method
const mapReverse = arr.map((_,index, arr)=> arr[arr.length -1 -index]);

// Approach 4: Using a for...of loop
let forLoopArr = []
for (const item of arr) {  
    forLoopArr.unshift(item) // initial position insertion
}

// Approach 5: Using a while loop
let i = arr.length - 1;
let whileLoopReverse = []
while(i>=0) {
    whileLoopReverse.push(arr[i]);
    i--;
}

// Approach 6: Using a for loop
let forLoopReverse = []
for(i=arr.length -1; i>=0; i--) { 
    forLoopReverse.push(arr[i])
}

// Approach 7: Using recursion
const reverse = (arr1) => {
    if(arr1.length ===0) {
        return []
    } else {
        const [first, ...rest] = arr1;
        return [...reverse(rest), first]
    }
}

reverse(arr)























// Approach 1: Using the reverse() method

// const reverseMethod = arr.reverse();
// console.log("🚀 ~ file: index.js:8 ~ reverseMethod:", reverseMethod)

// Approach 2: Using the spread operator

// const spreadReverse = [...arr].reverse()
// console.log("🚀 ~ file: index.js:13 ~ spreadReverse:", spreadReverse)


// Approach 3: Using the map() method

// const mapReverse = arr.map((_,index, arr)=> arr[arr.length -1 - index])
// console.log("🚀 ~ file: index.js:19 ~ mapReverse:", mapReverse)

// Approach 4: Using a for...of loop
// let revArr = []
// for( const item of arr) {
//     revArr.unshift(item)
// }
// console.log("🚀 ~ file: index.js:23 ~ revArr:", revArr)


// Approach 5: Using a while loop

// let i = arr.length -1;
// let newArr = []
// while(i>=0) {
//     newArr.push(arr[i])
//     i--;
// }
// console.log("🚀 ~ file: index.js:33 ~ newArr:", newArr)




// Approach 6: Using a for loop
// let forArr = []
// for(let i = arr.length -1; i>=0; i--) {
//     forArr.push(arr[i])
// }
// console.log("🚀 ~ file: index.js:44 ~ forArr:", forArr)


// Approach 7: Using recursion

// const recursion = (arr) =>{
//     if(arr.length ===0) {
//         return []
//     } else {
//         const [first, ...rest] = arr;
//         return [...recursion(rest), first]
//     }
// }

// console.log('recu:::', recursion(arr))







