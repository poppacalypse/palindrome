# Phrase object (with palindrome detector)

This is a sample NPM module created as part of my software development learning journey, specifically [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial)

The module can be used as follows:

```
$ npm install --global poppacalypse-palindrome
$ vim test.js
let Phrase = require("poppacalypse-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
