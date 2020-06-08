// 1 Reverse a string
/*
function reverse(string) {
  return Array.from(string).reverse().join("");
}
*/

// 5 Add `reverse` to all Strings using prototype
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// ---------------------------------------

// 2A Return true for palindrome, false otherwise
/*
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}
*/

// 2B Define a Phrase object
/*
function Phrase(content) {
  this.content = content;

  // Return true for palindrome, false otherwise
  this.palindrome = function palindrome() {
    let processedContent = this.content.toLowerCase();
    return processedContent === reverse(processedContent);
  };

  // Exercise: Add a 'louder' method to the Phrase object that returns a LOUDER (all-caps) version of the content.
  this.louder = function() {
    return this.content.toUpperCase();
  };
}
*/

// ---------------------------------------

// 3 Factor processedContent into its own method

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Return content processed for palindrome testing
  this.processedContent = function processedContent() {
    // return this.content.toLowerCase();
    return this.processor(this.content);
  };

  this.palindrome = function palindrome() {
    //let processedContent = this.content.toLowerCase();
    //return this.processedContent() === reverse(this.processedContent());
    return this.processedContent() === this.processedContent().reverse();
  };
}

// ---------------------------------------

// 4 Define a TranslatedPhrase object

/*
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Return translation processed for palindrome testing
  // w/o this, the method will look for 'this.content' by default
  this.processedContent = function processedContent() {
    // return this.translation.toLowerCase();
    return this.processor(this.translation);
  };
  // REPL let frase = new TranslatedPhrase("recognise", "reconocer");
}
*/

// TranslatedPhrase.prototype = new Phrase();


// 5 - go to top

// ---------------------------------------

// 6 Add `palindrome` to Strings
// Should it be added to String? All depends on culture of the language. Commonly tolerated in Ruby but JS tends to err on the side of caution.

String.prototype.palindrome = function() {
  return new Phrase(this).palindrome();
}

// 7 Excercise: Add a blank method to the String object prototype that returns true if the string is empty or consists solely of whitespace (spaces, tabs, or newlines). Hint: Use a regular expression. You will need the regex syntax for the start and end of a string

String.prototype.blank = function() {
  return !!(this.match(/^\s*$/g));
}

// 7 alternate answer
String.prototype.blanca = function blanca() {
  return /^\s*$/g.test(this);
}

// ---------------------------------------

// 8 Exercise: Using whichever method you prefer (direct indexing or slicing), add a last method to the Array object prototype that returns the last element of an array. Hint: Refer to Section 3.3

Array.prototype.last = function() {
  return this.slice(-1)[0];
}

Array.prototype.lastIndex = function() {
  return this[this.length -1];
}
