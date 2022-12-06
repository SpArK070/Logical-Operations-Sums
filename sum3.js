// Description
// You are given five numbers, stored in the variables with the following names
// one, two, three, four, five
// Find the value of sum1 and sum2, such that
// sum1 = one + two 
// sum2 = three + four
// If the value of both sum1 and sum2 is greater than the value stored in variable five, printYes, else printNo

function twoSumsOneNumber(one, two, three, four, five) {
   
    sum_1 = one + two;
    sum_2 = three + four;

    if (sum_1 + sum_2 > five){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
var one =1;
var two =2;
var three =3;
var four =4;
var five =5;

twoSumsOneNumber(one, two, three, four, five)