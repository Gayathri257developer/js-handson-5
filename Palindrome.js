// 8. Plaindrome Check 

// You are given a string S , Your task is to check wether the given string is a Palindrome or not. A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. 
// String can contain both upppercase lowercase letters.

var Palin_Check = (str) =>
{
	let palin = str.toLowerCase().replace().split().reverse().join();
	
	 if(str === palin){
	 return ("True");
	 }
	 else{
	   return ("False");
	 }
}