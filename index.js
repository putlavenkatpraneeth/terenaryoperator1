var score = 95;
score >= 90
  ? console.log("excellent")
  : score >= 60 && score <= 89
  ? console.log("good")
  : console.log("need improvement"); //excellent

var day = "satursday";
day == "sunday" || day == "satursday"
  ? console.log("weeknd")
  : console.log("weekday"); //weeknd

var str = "hello";
var str1 = "";

for (i = 0; i < str.length; i++) {
  str1 += str[i];
  console.log(str1);
} //he
//hel
//hell
//hello

var a = "pope";
var b = "";
for (i = a.length - 1; i >= 0; i--) {
  b = b + a[i];
}
if (a == b) {
  console.log("is a palindroma");
} else {
  console.log("not a palindroma");
} //not a palindroma
