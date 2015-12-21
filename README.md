# phonetic-alpha

This is an npm package 

A simple node module to convert a string of characters to a list of words

Usage
Installation
To install run npm install phonetic-alpha

To use:

	var x = require('phonetic-alpha');
	
	…
  
	console.log(x.expand('abc')); 
	// will return 
	// 'Alpha, Bravo, Charlie'

	console.dir(x.list('abc')); 
	// will return:
    [   { index: 0, character: 'a', word: 'Alpha' }, 
        { index: 1, character: 'b', word: 'Bravo' }, 
        { index: 2, character: 'c', word: 'Charlie' } ]

---  
The expand & list functions also support three phonetic alphabets, including
    nato : Nato Phonetic Alphabet (default set if not specified)
    west : Western Phonetic Alphabet
    morse: Morse Code Alphabet

---
Here is an example of display of SOS morse code:

    var x = require('phonetic-alpha');
    console.log( x.expand('sos', 'morse') );

    Output: . . .  - - -  . . .
