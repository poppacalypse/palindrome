module.exports = Phrase;

// Adds `reverse` to all Strings using prototype.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.

function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  };

  // Returns the letters in the content.
  // e.g. new Phrase("Hello, darkness!").letters() === "Hellodarkness"
  this.letters = function letters() {
    // 4 an even more compact method than 3
    return (this.content.match(/[a-z]/gi) || []).join("");
    // return this.content.match(/[a-z]/gi).join("");

    // 5 Exercise: introduce lettersRegex to FP method
    /*
    const lettersRegex = /[a-z]/gi;
    return Array.from(this.content).filter(c => c.match(lettersRegex)).join("");
    */

    // 3 functional programming
    /*
    return Array.from(this.content).filter(c => c.match(/[a-z]/gi)).join("");
    */

    // 2 forEach method
    /*
    let theLetters = [];
    const lettersRegex = /[a-z]/i;   // i = case insensitive

    Array.from(this.content).forEach(function(character) {
      if (character.match(lettersRegex)) {
        theLetters.push(character);
      }
    });
    return theLetters.join("");
    */

    // 1A for loop, duplication removed
    /*
    let theLetters = [];
    for (let i=0; i<this.content.length; i++) {
      let character = this.content.charAt(i);
      if (character.match(/[a-zA-Z]/)) {
          theLetters.push(character);
      }
    }
    return theLetters.join("");
    */

    // 1 for loop
    /*
    let theLetters = [];
    for (let i=0; i<this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
          theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
    */

  };

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.letters()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
}
