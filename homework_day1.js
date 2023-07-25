// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A: any (we should be indicating the type of d by ":", not by "=")

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: releaseYear not defined, there should not be a comma after releaseYear

let prices = [100, 200, 300];
prices[0] = '$100';
// A: prices is type int[] and we are passing a string

function myFunc(a: number, b: number): number {}
// A: the output type for myFunc is number, but since the function is not defined it will not return a number (i.e. we need code within the curly brackets)



// CodeWars Problem 1
// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable (seconds) {
    let hrs = '00'
    let mins = '00'
    let secs = '00'
    let time = seconds
    while (time > 0) {
        if(time >= 3600) {
            hrs = Math.floor(time/3600)
            time = time - (hrs*3600)
            if (hrs < 10) {
            hrs = '0' + String(hrs)
            }
            else {
            hrs = String(hrs)
            }
        }
        else if (time >= 60 && time < 3600) {
            mins = Math.floor(time/60)
            time = time - (mins*60)
            if (mins < 10) {
            mins = '0' + String(mins)
            }
            else {
            mins = String(mins)
            }
            humanReadable(time)
        }
        else {
            if (time < 10) {
            secs = '0' + String(time)
            }
            else {
            secs = String(time)
            }
            time = 0
        }
    }
    return hrs + ':' + mins + ':' + secs
}



// CodeWars Problem 2
// https://www.codewars.com/kata/526989a41034285187000de4/train/javascript

function ipsBetween(start, end){
    const startArr = start.split('.')
    const endArr = end.split('.')
    let i = 3
    let sumStart = 0
    let sumEnd = 0
    
    for (let pos in startArr) {
      startArr[pos] = Number(startArr[pos]) * 256**i
      sumStart += startArr[pos]
      endArr[pos] = Number(endArr[pos]) * 256**i
      sumEnd += endArr[pos]
      i --
    }
    return sumEnd - sumStart
}