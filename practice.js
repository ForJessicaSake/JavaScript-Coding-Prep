// //No 1: Print numbers 1 -10
for(let num =1; num <=10; num++){
    console.log(num)
}
// //No 2: Print odd numbers 1 -100
for(let oddNum =0; oddNum <=100; oddNum++){
    if(oddNum % 2 != 0){
        console.log(oddNum)
    }
}
// //No 3: Print multiplication table 1-10
const multiplication=(value)=>{
    for(let num = 0; num <=12; num++){
        console.log(value * num)
    }
}
multiplication(7);
//No 7: calc the sum of even numbers greater than 10 and less than 30
const sumOfEvenNum=()=>{
    let sum = 0;
for (let i = 11; i < 30; i++) {
  sum += i;
}
console.log(sum);
}
sumOfEvenNum()
//No 10:Sum of numbers in an array
const sumOfFunctions = ()=>{
const numbers = [1, 2, 3, 4, 5]
let sum = 0;
let i =0;
while(i<numbers.length){
    sum += numbers[i];
    i++;
}
console.log(sum)
}
sumOfFunctions()
//No 11: Calculate the average of numbers in an array of numbers
const averageOfNumbers =()=>{
    const num = [2,5,7];
    let total = 0;
    for(let i =0; i<num.length; i++){
        total += num[i];
    }
    const average = total/num.length;
    console.log(average);
}
averageOfNumbers()
//No 12: Create a function that receives an array of numbers as arguments and returns an array containing only the positive numbers
const getPositiveNum =()=>{
    const num = [1,2,-3,-4];

    const positiveNum = []
    for(let i = 0; i < num.length; i++){
        if(num[i] > 0){
            positiveNum.push(num[i])
        }
    }
    console.log(positiveNum)
}
getPositiveNum()
//No 13:Find the maximun number in an array of numbers
const maximunNum = ()=>{
    const num = [1, 2, 3, 4];
    let max = num[0];
    for(i= 1; i < num.length; i++){
        if(num[i] > max){
            max = num[i]
        }
    }
    console.log(max);
}
maximunNum()

