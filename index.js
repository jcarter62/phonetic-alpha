'use strict';

var alpha = [];
var nato = require('./lib/nato'),
    west = require('./lib/west'),
    morse = require('./lib/morse');

function search(item, alpha) {
    for (var i = 0; i < alpha.set.length; i++) {
        if (alpha.set[i].letter === item) {
            return alpha.set[i].word;
        }
    }
    // If not found, then simply return the character.
    return item;
}

function SetAlpha(alphabet) {
    if (alphabet == null ) {
        alpha = nato;
    } else {
        if (alphabet.toLowerCase() == 'nato') {
            alpha = nato;
        } else if (alphabet.toLowerCase() == 'west') {
            alpha = west;
        } else if (alphabet.toLowerCase() == 'morse') {
            alpha = morse;
        }
    }
}

module.exports = {
    expand: function (word, alphabet) {
        var result = '';

        SetAlpha(alphabet);

        for (var i = 0; i < word.length; i++) {
            var c = word.substr(i, 1).toUpperCase();
            var w = search(c, alpha);
            if (result.length > 0) {
                result = result + alpha.separator;
            }
            result = result + w;
        }
        return result;
    },

    list: function (word, alphabet) {
        var result = [];

        SetAlpha(alphabet);

        for (var i = 0; i < word.length; i++) {
            var c = word.substr(i, 1).toUpperCase();
            var w = search(c, alpha);
            result.push({index: i, character: word.substr(i,1), word: w });
        }
        return result;
    }
};
