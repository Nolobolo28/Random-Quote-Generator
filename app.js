const quotes = [
  {
    quote:
      "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
    author: "Jesus",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
];

let paragraphQuote = document.querySelector("#quote-p");
let headingAuthor = document.querySelector("#quote-heading");
let btn = document.querySelector("button");

function findQuote() {
  let findQuote = Math.floor(Math.random() * quotes.length + 1);
  let quoteString = quotes[findQuote].quote;
  let quoteAuthor = quotes[findQuote].author;
  paragraphQuote.textContent = `"${quoteString}"`;
  headingAuthor.textContent = `- ${quoteAuthor}`;
}

btn.addEventListener("click", findQuote);
