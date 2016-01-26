var word = "test";
console.log(propperNoun(word));

function propperNoun (word) {
    var first = word.substr(0,1);
    first = first.toUpperCase();
    var restOfWord = word.substr(1);
    return first + restOfWord;
}
