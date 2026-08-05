/* 
PSEUDOCODE:

Function clean user input
Params: user input val (text string)
Body:
- store whitespace-trimmed, lowercased val in variable i.e. clean it
Return: cleaned user input val
*/

export function cleanUserInput(input) {
    const cleanInput = input.trim().toLowerCase();

    return cleanInput;
}