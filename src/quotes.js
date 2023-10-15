const quotes = [
  {
    quote: "To the well-organized mind, death is but the next great adventure",
    author: "Albus Dumbledore",
  },
  {
    quote:
      "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals",
    author: "Sirius Black",
  },
  {
    quote: "Always",
    author: "Snape",
  },
  {
    quote:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends",
    author: "Albus Dumbledore",
  },
  {
    quote: "I solemnly swear I am up to no good",
    author: "Harry Potter",
  },
];

const quote = document.querySelector(".quotes span:first-child");
const author = document.querySelector(".quotes span:last-child");
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;
