const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const quoteContentElement = document.getElementById('quote-content');
const quoteTextElement = document.getElementById('quote-text');
const animeNameElement = document.getElementById('anime-name');
const characterNameElement = document.getElementById('character-name');
const newQuoteButton = document.getElementById('new-quote');


function fetchRandomQuote() {

  loadingElement.style.display = 'block';
  errorElement.style.display = 'none';
  quoteContentElement.style.display = 'none';


  fetch('https://api.animechan.io/v1/quotes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao buscar citação. Tente novamente mais tarde.');
      }
      return response.json();
    })
    .then(data => {

      if (data.status === 'success' && data.data) {

        displayQuote(
          data.data.content,
          data.data.anime.name,
          data.data.character.name
        );
      } else if (data.anime && data.character && data.quote) {

        displayQuote(
          data.quote,
          data.anime,
          data.character
        );
      } else {
        throw new Error('Formato de resposta inesperado');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      errorElement.textContent = error.message;
      errorElement.style.display = 'block';
      loadingElement.style.display = 'none';
    });
}

function displayQuote(quote, anime, character) {
  quoteTextElement.textContent = quote;
  animeNameElement.textContent = anime;
  characterNameElement.textContent = character;


  loadingElement.style.display = 'none';
  quoteContentElement.style.display = 'block';
}


newQuoteButton.addEventListener('click', fetchRandomQuote);

document.addEventListener('DOMContentLoaded', fetchRandomQuote);
