//Create a variable named quoteString and put this string in it: 
let quoteString = "Failure is simply the opportunity to begin again this time more intelligently. "

//Using a string method, change the text in quoteString to all upper case and save it in a new variable named upperCaseString. Output: 
var upperCaseString = quoteString.toUpperCase()
console.log(`Upper case string is: ${upperCaseString}`)

//Create a new variable named authorString and put this text in it. 

var authorString = "- Henry Ford"

//Then use a string method to put the authorString value on the end of the quoteString value, saving the new string in a variable named completeString. 

var completeString = quoteString.concat(authorString)

//Now create a new string variable named secondQuote and put this string in it: 
let secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"

//Using a string method, change the text in secondQuote to all lower case and save it in a new variable named lowerCaseString.
var lowerCaseString = secondQuote.toLowerCase()
console.log(`Lower case string is: ${lowerCaseString}`)

//Find the character at the 3rd position of secondQuote.
console.log(`Character in quote at location 3: ${secondQuote.charAt(2)}`)

//Create a new variable named findString. Using a string method, remove this part of the secondQuote string and put it in findString variable:
var findString = secondQuote.slice(35,136)