let apiQuotes = [];
const quoteContainer = document.getElementById("quote-container");
const quoteText  = document.getElementById("quote");
const author  = document.getElementById("author");
const tweetButton = document.getElementById("twitter");
const newQuoteButton  = document.getElementById("new-quote");
const loader = document.getElementById("loader");
// generate new quote
const newQuote = ()=> {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.innerText = quote.text;
    author.innerText = quote.author;
    if(quoteText.textContent.length > 100)
        quoteText.classList.add('long-text');
    else
        quoteText.classList.remove('long-text');
    complete();
}
// api calling
async function getQuotes(){
    loading();
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
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} ~ ${author.textContent}`;
    window.open(twitterUrl,'_blank');
}
// loading 
function loading(){
    loader.hidden = false;
    quoteContainer.hidden =true;    
}
// hide loading
function complete(){
    quoteContainer.hidden =false;
    loader.hidden =true;
}
newQuoteButton.onclick = newQuote;
tweetButton.onclick = tweetQuote;
getQuotes();
