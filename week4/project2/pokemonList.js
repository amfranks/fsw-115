const pokemonButton = document.getElementById('pokemonButton');
const pokemonListDiv = document.getElementById('pokemonList');

pokemonButton.addEventListener('click', function() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        console.log(response.data)

        for (let i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement('h1');
            h1.textContent = response.data.results[i].name;
            pokemonListDiv.appendChild(h1);
        }
    })
    .catch(error => console.log(error))
});