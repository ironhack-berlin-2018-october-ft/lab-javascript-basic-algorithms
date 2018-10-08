// Names and Input
var hacker1 = "Guto";
console.log("hacker1 is", hacker1);

var hacker2 = "axel";
console.log("hacker2 is", hacker2);

//Conditionals
if (hacker1.length > hacker2.length)
  console.log("hacker1 has the longest name, it has " + hacker1.length + " characters");
else if (hacker1.length < hacker2.length)
  console.log("hacker2 has the longest name, it has " + hacker2.length + " characters");
else
  console.log("Wow, you both got equally lon names, " + hacker1.length + " characters!!")

var iteration6 = ""
for (var i = 0; i < hacker1.length; i++) {
  iteration6 += hacker1[i].toUpperCase()
  if (hacker1.length - 1 !== i)
    iteration6 += " "
}
var iteration6bis = hacker1.split('').join(' ').toUpperCase()
console.log("iteration6", iteration6)
console.log("iteration6bis", iteration6bis)

var iteration7 = ''
for (var i = hacker2.length - 1; i >= 0; i--) {
  iteration7 += hacker2[i]
}
console.log("iteration7", iteration7)

var iteration7bis = hacker2.split('').reverse().join('')
console.log("iteration7bis", iteration7bis)

if (hacker1.toUpperCase() < hacker2.toUpperCase())
  console.log("hacker1 goes first")
else if (hacker1.toUpperCase() > hacker2.toUpperCase())
  console.log("hacker2 goes first")
else
  console.log("You have both the same name")


// Bonus
var sentence = "Amor, Roma"
var s1 = ""
for (var i = 0; i < sentence.length; i++) {
  var character = sentence[i].toUpperCase()
  if ("A" <= character && character <= "Z")
    s1 += character
}
var s2 = s1.split('').reverse().join('')
console.log("s1", s1);
console.log("s2", s2);

if (s1 === s2)
  console.log("It's a palindrom");
else
  console.log("It's NOT a palindrom");
