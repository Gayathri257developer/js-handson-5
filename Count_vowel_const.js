// 13. Count the Vowels and Consonants

// You are given a string S containing both uppercase and lowercase letters. 
// You need to find out the number of vowels and the number of consonants in the given string.

var Count_Vowels= (S) => 
{
  let vowelsCount = 0;
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];
  for(let char of S){
    if(vowels.includes(char)){
      vowelsCount++;
    }
  }
  return vowelsCount;  
};

var Count_Consonants= (S) => 
{
  let consonantsCount = 0;
  const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z',
  'B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  for(let char of S){
    if(consonants.includes(char)){
      consonantsCount++;
    }
  }
  return consonantsCount;     
};
 
