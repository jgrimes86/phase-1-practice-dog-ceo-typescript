console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

const dogContainer = document.getElementById('dog-image-container');

fetch(imgUrl)
    .then(response => response.json())
    .then(imagePopulator)

function imagePopulator(apiReturn) {
    // console.log(apiReturn)
    let returnedDogs = apiReturn.message;
    // console.log(returnedDogs)

    for(const item of returnedDogs) {
        // console.log(item)
        let img = document.createElement('img');
        img.src = item;
        dogContainer.append(img)
    }
}


const breedUrl = "https://dog.ceo/api/breeds/list/all";

const dogUl = document.getElementById('dog-breeds');

fetch(breedUrl)
    .then(response => response.json())
    .then(breedLister)

function breedLister(apiReturn) {
    console.log(apiReturn)
    console.log('apiReturn is a: '+typeof(apiReturn))
    let returnedBreeds = apiReturn.message;
    console.log(returnedBreeds)
    console.log('returnedBreeds is a: '+typeof(returnedBreeds))

    for(const item in returnedBreeds) {
        let li = document.createElement('li');
        li.textContent = item;
        li.style = 'color: red';
        li.addEventListener('click', changeColor)
        dogUl.append(li)
    }
}

function changeColor(clickEvent) {
    let li = clickEvent.target;
    li.style = 'color: blue'
}

const dropdown = document.getElementById('breed-dropdown');