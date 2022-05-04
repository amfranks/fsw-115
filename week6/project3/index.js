const goButton = document.getElementById('getData');

goButton.addEventListener('click', function() {
    const getData = async () => {
        let response;
    
        var charactersList = document.getElementById('charactersList');
        var planetsList = document.getElementById('planetsList');
        var starshipsList = document.getElementById('starshipsList');
    
        try {
            response = await axios.get('https://swapi.dev/api/people');
            for (let i = 0; i < response.data.results.length; i++) {
                let li = document.createElement('li');
                li.textContent = response.data.results[i].name;
                charactersList.style.listStyleType = 'none';
                charactersList.appendChild(li);
            }
            
    
            response2 = await axios.get('https://swapi.dev/api/planets');
            for (let i = 0; i < response2.data.results.length; i++) {
                let li = document.createElement('li');
                li.textContent = response2.data.results[i].name;
                planetsList.style.listStyleType = 'none';
                planetsList.appendChild(li);
            }
            
    
    
            response3 = await axios.get('https://swapi.dev/api/starships');
            for (let i = 0; i < response3.data.results.length; i++) {
                let li = document.createElement('li');
                li.textContent = response3.data.results[i].name;
                starshipsList.style.listStyleType = 'none';
                starshipsList.appendChild(li);
            }
            
        }
        catch(error) {
            console.log(error);
        }
    }
    getData();
})