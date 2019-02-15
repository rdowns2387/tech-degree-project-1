/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing



/***
  This page cites quotes from the cameo appearances of the late Stan Lee (RIP) in his many appearances over the years in the MCU films. For particular quotes, screenshots of scenes from the movie are also shown

  images are from: https://www.thisisinsider.com/stan-lee-marvel-cameos-2017-3
***/

/* the quotes object */

var quotes = [
  {
    quote:"Wow.",
    person: 'Stan Lee',
    citation: 'Incredible Hulk',
    year: '2008',
    image: 'https://amp.thisisinsider.com/images/57ee8716c4cfe01c008b459a-750-308.png'
  },
  {
    quote:"Did it work?",
    person: 'Stan Lee',
    citation: 'Thor',
    year: '2011',
    image: 'https://amp.thisisinsider.com/images/57ee8817ad76211b008b45a0-750-317.png'
  },
  {
    quote:"I thought he'd be taller.",
    person: 'Stan Lee',
    citation: 'Captain America: The First Avenger',
    year: '2011',
    image: 'https://amp.thisisinsider.com/images/57ee8b12ad76211a008b45aa-750-320.png'
  },
  {
    quote:"Superheroes in New York? Give me a break...",
    person: 'Stan Lee',
    citation: 'The Avengers',
    year: '2012',
    image: 'https://amp.thisisinsider.com/images/57ee8c7aad76211a008b45ad-750-375.jpg'
  },
  {
    quote:"Ask for her number, you moron.",
    person: 'Stan Lee',
    citation: 'The Avengers (Deleted Scene)',
    year: '2012'
  },
  {
    quote:"10!",
    person: 'Stan Lee',
    citation: 'Iron Man 3',
    year: '2013',
    image: 'https://amp.thisisinsider.com/images/57ee8f34ad76211b008b45b2-750-415.png'
  },
  {
    quote:"Yeah, can I have my shoes back?",
    person: 'Stan Lee',
    citation: 'Thor: The Dark World',
    year: '2013'
  },
  {
    quote:"Oh man, I am so fired.",
    person: 'Stan Lee',
    citation: 'Captain America: The Winter Soldier',
    year: '2014',
    image: 'https://amp.thisisinsider.com/images/57ee90d2c4cfe01b008b45b4-750-338.png'
  },
  {
    quote:"Excelsior!",
    person: 'Stan Lee',
    citation: 'Avengers: Age of Ultron',
    year: '2015',
    image: 'https://amp.thisisinsider.com/images/57ee951dad762119008b45b9-750-313.png'
  },
  {
    quote:"Don't make me come down there, you punk!",
    person: 'Stan Lee',
    citation: 'Spider-man: Homecoming',
    year: '2017',
    image: 'https://amp.thisisinsider.com/images/59fb7d4c75d7424d008b461b-750-563.png'
  },
  {
    quote:"My hands aren't as steady as they used to be.",
    person: 'Stan Lee',
    citation: 'Thor: Ragnarok',
    year: '2017',
    image: 'https://amp.thisisinsider.com/images/5bed8d2f48eb1259a5511394-960-720.jpg'
  },
  {
    quote:"What's the matter with you kids? You never seen a spaceship before?",
    person: 'Stan Lee',
    citation: 'Avengers: Infinity War',
    year: '2018',
  },
  {
    quote:"well, the '60s were fun, but now I'm paying for it.",
    person: 'Stan Lee',
    citation: 'Ant-Man and the Wasp',
    year: '2018',
  }
]

/*colors object to be used to change the background color later*/

var colors = [
  'red',
  'orange',
  'navy',
  'green',
  'blue',
  'purple',
  'fuschia',
  'brown',
  'grey',
  'black',
  'tan',
  'cyan',
  'magenta'
]


/* Create global variable 'randomNumber' */

var randomNumber ="";

/***
  `getRandomQuote` function:
   - generate a random number and stores it in var 'randomNumber'
   - return a random quote to the console
***/

function getRandomQuote(){
  randomNumber = Math.floor( Math.random() * 12 );
  return quotes[randomNumber];
}


/***
 `printQuote` function:
   - call the `getRandomQuote` function to assign a value to randomNumber.
   - use quotes[randomNumber] to change the innerHTML of 'quote-box'.
   - if the quote has an image property, add that image to 'quote-box'.
   - using randomNumber, apply colors[randomNumber] to the body background
      - researched at: https://stackoverflow.com/questions/197748/how-do-i-change-the-background-color-with-javascript
***/

function printQuote(){
  getRandomQuote();

  document.getElementById('quote-box').innerHTML = '<p class="quote">'+quotes[randomNumber].quote+'</p><p class="source">'+quotes[randomNumber].person+'<span class="citation">'+quotes[randomNumber].citation+'</span><span class="year">'+quotes[randomNumber].year+'</span></p>'

  if (quotes[randomNumber].image) {
    document.getElementById('quote-box').innerHTML += '<img src="'+quotes[randomNumber].image+'">';
  }

  document.body.style.background = colors[randomNumber];
}

/* Run printQuote every 6 seconds
    - Researched on StackOverflow at: https://stackoverflow.com/questions/11901074/javascript-call-a-function-after-specific-time-period
*/

setInterval(printQuote,6000);


/***
  No touchy
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
