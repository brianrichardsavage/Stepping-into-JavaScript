// JavaScript Document

function getAverage(a,b){
  var average = (a + b) / 2;
  console.log(average);
  return average;
}

var myResult = getAverage(7,8,9); //global variable

function logResult(){
  console.log("the avarage is " + myResult + " inside the function");
}

logResult();

