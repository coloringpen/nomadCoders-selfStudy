const quotes = [
  {
    quote:
      'It is better to be hated for what you are than to be loved for what you are not.',
    author: 'Andre Gide, Autumn Leaves',
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: 'George Bernard Shaw',
  },
  {
    quote:
      'Folks are usually about as happy as they make their minds up to be.',
    author: 'Abraham Lincoln',
  },
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'There is no friend as loyal as a book.',
    author: 'Ernest Hemingway',
  },
  {
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Some people never go crazy. What truly horrible lives they must lead.',
    author: 'Charles Bukowski',
  },
  {
    quote: 'It matters not what someone is born, but what they grow to be.',
    author: 'J.K. Rowling, Harry Potter and the Goblet of Fire',
  },
  {
    quote: 'Do one thing every day that scares you.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'Not all those who wander are lost.',
    author: 'J.R.R. Tolkien, The Fellowship of the Ring',
  },
  {
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: 'Toni Morrison',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// make random quotes from the quotes array appears on the screen
// 1. choose random quotes
//  - selected by array index
//  - use random number generator : Math.ceil(Math.random()*11)
// 2. selected random quote should be go inside of html

function makingRandomIndex() {
  const random = Math.floor(Math.random() * 10);
  return random;
}

function randomQuote() {
  const index = makingRandomIndex();
  const randomQuote = quotes[index].quote;
  const theAuthor = quotes[index].author;

  quote.innerText = randomQuote;
  author.innerText = theAuthor;
}

randomQuote();
