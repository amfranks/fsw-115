const starWarsButton = document.getElementById('starWarsButton');
const starWarsDiv = document.getElementById('starWars');

starWarsButton.addEventListener('click', function() {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
        console.log(response)

        for (let i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement('h1');
            h1.textContent = response.data.results[i].name;
            starWarsDiv.appendChild(h1);
        }
    })
    .catch(error => console.log(error))
});