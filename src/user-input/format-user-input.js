export function formatUserInput(input) {
    const nameWords = input.split(" ");
    const capitalizedName = nameWords
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
    
    return capitalizedName;
}