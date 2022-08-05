//Creating variables to assign JS values to HTML
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
// const whatsappBtn = document.getElementById('whatsapp');
// const instagramBtn = document.getElementById('instagtam');
// const linkedinBtn = document.getElementById('linkedin');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote-btn');
const loader = document.getElementById('loader');



//loading
function loading () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//complete
function complete () {
    loader.hidden = true;
    quoteContainer.hidden = false;
}


//Store quotes
let apiQuotes= [];

//Show quote
function newQuote () {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;
    complete();
}

//Get quotes from API
async function getQuotes () {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();  
    newQuote();    

} catch (error) {
}
}

//Share on twitter
function tweetQuote () {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`; 
    window.open(twitterUrl, '_blank');
} 

//EventListner
newQuoteBtn.addEventListener('click', newQuote );
twitterBtn.addEventListener('click', tweetQuote);


getQuotes();
