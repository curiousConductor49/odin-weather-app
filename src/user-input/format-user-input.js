/* 
PSEUDOCODE

Function format user input
Params: user input val (text string)
Body:
- split input into an array using spaces for the separator (to handle multi-word location names e.g. "new york" vs "michigan")
- for each word:
    - slice, capitalize, and store the first letter
    - replace the first letter w/ the capitalized version
- join the words into a space-separated string
Returns: the user input with capitalized initials
*/

export function formatUserInput(input) {
    const nameWords = input.split(" ");
    const capitalizedName = nameWords
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
    
    return capitalizedName;
}