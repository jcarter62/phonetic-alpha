/**
 * Created by jcarter on 12/18/15.
 */
var pho = require('./index');

var word = "";
var words = ['abc', 'nodejs', 'is', 'interesting', 'programming', '12345'];

var alphabets = ['nato', 'west', 'morse'];
for (var a in alphabets) {

    alpha = alphabets[a];

    for (var i = 0; i < words.length; i++) {
        word = words[i];
        console.log(word + ':' + pho.expand(word, alpha));
    }

    for (var i = 0; i < words.length; i++) {
        word = words[i];

        console.log('word:' + word);
        console.dir(pho.list(word, alpha));
        console.log('----------');
    }
}
