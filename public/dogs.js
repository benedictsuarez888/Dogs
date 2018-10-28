(function(){
    var all = [];
    var pageTitle = document.getElementById('pageTitle');
    var breedsList = document.getElementById('breedsList');

    axios.get('https://dog.ceo/api/breeds/list/all')
        .then(function(res) {
            all = res.data;
            renderBreeds(all);
        })
        .catch(function(err) {
            all = [];
        });

    // function renderBreeds(all) {
    //     breedsList.innerHTML = '';
    //     var list = document.createElement('li');
    // }

    // all.forEach(function(breed) {
    //     var liBreed = document.createElement('li');
    //     liBreed.textContent = breed.message;
    //     li.append(liBreed);
    //     breedsList.append(li)
    // });

    function renderBreeds(all) {
        
    }
})();