var inputStr = prompt("Input a string to find if every letter of the string is a vowel  or a consonant"); // To get user input

 //Function declaration to find if each letter of the string is a variable or a consonant
function checkIfVowel(inputStr, i) { 
     
    if(inputStr.toLowerCase().charAt(i) == 'a' || inputStr.toLowerCase().charAt(i) == 'e' || inputStr.toLowerCase().charAt(i) == 'i' || inputStr.toLowerCase().charAt(i) == 'o' || inputStr.toLowerCase().charAt(i) == 'u') // checks if the letter/character in the string is a vowel
    {
        return true;
    }
    else
    {
        return false;
    }

}

for(var i = 0; i < inputStr.length ; i++ ) // For-loop to perform a check if every letter in the string is a vowel or a consonant
{     
     if( checkIfVowel(inputStr, i))
     {
        // Writes the result on the loaded page
        document.write("The " + i + "th letter " + inputStr.charAt(i) + " of the string " + inputStr + " is a: Vowel " + "<br><br>");
    }
    else
    {
        // Writes the result on the loaded page
        document.write("The " + i + "th letter " + inputStr.charAt(i) + " of the string " + inputStr + " is a: Consonant"+ "<br><br>");
    }
}