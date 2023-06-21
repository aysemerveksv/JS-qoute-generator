let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
  {
    quote: '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best."',
    person: '― Marilyn Monroe'
  },
  {
    quote: '“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',
    person: '― Bernard M. Baruch'
  },
  {
    quote: '“You\'ve gotta dance like there\'s nobody watching, Love like you\'ll never be hurt, Sing like there\'s nobody listening, And live like it\'s heaven on earth.”',
    person: '― William W. Purkey'
  },
  {
    quote: '“I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”',
    person: '― Maya Angelou'
  },
  {
    quote: '“The only true wisdom is in knowing you know nothing.”',
    person: '― Socrates'
  },
];

btn.addEventListener('click', function() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
