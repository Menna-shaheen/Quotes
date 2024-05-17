var quotes = [
    {
        'Author': '― Elbert Hubbard',
        'quote': '“A friend is someone who knows all about you and still loves you.”'
    },
    {
        'Author': '― Oscar Wilde',
        'quote': '“To live is the rarest thing in the world. Most people exist, that is all.”'
    },
    {
        'Author': '― Mahatma Gandhi',
        'quote': '“Live as if you were to die tomorrow. Learn as if you were to live forever.”'
    },
    {
        'Author': '― Stephen Chbosky',
        'quote': '“We accept the love we think we deserve.”'
    },
    {
        'Author': '― Friedrich Nietzsche',
        'quote': '“Without music, life would be a mistake.”'
    },
    {
        'Author': '― Ralph Waldo Emerson',
        'quote': '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”'
    },
    {
        'Author': '― Narcotics Anonymous',
        'quote': '“Insanity is doing the same thing, over and over again, but expecting different results.”'
    },
    {
        'Author': '― Andre Gide',
        'quote': '“It is better to be hated for what you are than to be loved for what you are not.”'
    },

    {
        'Author': '― Mark Twain',
        'quote': '“Good friends, good books, and a sleepy conscience: this is the ideal life.”'
    },
    {
        'Author': '― William Shakespeare, As You Like It',
        'quote': '“The fool doth think he is wise, but the wise man knows himself to be a fool.”'
    },

];
var lastIndex = -1;
function getQuote() {
    var random;
    for (var i = 0; i < quotes.length; i++) {
         random = Math.floor(Math.random() * quotes.length );
        if (random !== lastIndex) {
            break;
        }

    }
    lastIndex = random;
    var randomQuote = quotes[random];


    document.getElementById("Q-output").innerHTML = `${randomQuote.quote}`;
    document.getElementById("A-output").innerHTML = `${randomQuote.Author}`;
}