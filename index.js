
//STRING METHODSS

//LENGTH

var myCollageName = 'govt girls degree high school'
var checkLength = myCollageName.length
console.log(checkLength);


//result will be 29

//INDEXOF 

var myName = 'sana baloch'

var indexOfName = myName.indexOf('a')
console.log(indexOfName);

//result will be 1

indexOfName = myName.lastIndexOf('a')
console.log(indexOfName);

//result will be 6

/////CHARAT

var fruit = 'mango'
var checkingIndex = fruit.charAt(2)
console.log(checkingIndex);

//result n

////SLICE METHOD


var nums = ['apple','banana','mango','grapes','leeche']
var check = nums.slice(1,2)
console.log(check);

//result will be 'banana'

//REPLACE ADN REPLACE ALL

var greetings = 'Hi how are you?'
var replaceee = greetings.replace('Hi','Salam')
console.log(replaceee);

//Result will be 'salam how are you?'

//REPLACE globally

var intro = 'My name is jack my father name is james, my mother name is smith'
var replacealll = intro.replace(/name/g,'....')
console.log(replacealll);

//RESULT WILL BE 'My .... is jack my father .... is james, my mother .... is smith'