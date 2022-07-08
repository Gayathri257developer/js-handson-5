// 3. Count the Vowels

// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

var Count_Vowels= (S) => 
{
  let vowelsCount = 0;
  const vowels = ['a','e','i','o','u'];
  for(let char of S){
    if(vowels.includes(char)){
      vowelsCount++;
    }
  }
  return vowelsCount;
};