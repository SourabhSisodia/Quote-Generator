let apiQuotes = [];
const quoteContainer  = document.getElementById("quote");
const author  = document.getElementById("author");
const tweetButton = document.getElementById("twitter");
const newQuoteButton  = document.getElementById("new-quote");

// generate new quote
const newQuote = ()=> {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteContainer.innerText = quote.text;
    author.innerText = quote.author;
    if(quoteContainer.textContent.length > 100)
        quoteContainer.classList.add('long-text');
    else
        quoteContainer.classList.remove('long-text');
}
// api calling
async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }
    catch(err)
    {
        console.log(err);
    }
}
// tweet button
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteContainer.textContent} ~ ${author.textContent}`;
    window.open(twitterUrl,'_blank');
}
newQuoteButton.onclick = newQuote;
tweetButton.onclick = tweetQuote;
getQuotes();
