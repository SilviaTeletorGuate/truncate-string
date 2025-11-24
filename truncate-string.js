function truncateString(string, num) {
if (string.length > num) {
    return string.slice(0, num) + "...";
} 
return string;
}
let firstTruncateString = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(firstTruncateString);
firstTruncateString = truncateString("Peter Piper picked a peck of pickled peppers", 11);
console.log(firstTruncateString);
firstTruncateString = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(firstTruncateString);
firstTruncateString = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
console.log(firstTruncateString);
firstTruncateString = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
console.log(firstTruncateString);
firstTruncateString = truncateString("A-", 1);
console.log(firstTruncateString);
firstTruncateString = truncateString("Absolutely Longer", 2);
console.log(firstTruncateString);