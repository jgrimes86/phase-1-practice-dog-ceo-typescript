"use strict";
console.log('%c HI', 'color: firebrick');
const randomDogURL = "https://dog.ceo/api/breeds/image/random/4";
const dogContainer = document.getElementById('dog-image-container');
fetch(randomDogURL)
    .then(response => response.json())
    .then(imagePopulator);
function imagePopulator(dogImage) {
    let returnedDogs = dogImage.message;
    for (const item of returnedDogs) {
        let img = document.createElement('img');
        img.src = item;
        dogContainer === null || dogContainer === void 0 ? void 0 : dogContainer.appendChild(img);
    }
}
const breedListURL = "https://dog.ceo/api/breeds/list/all";
const dogUl = document.getElementById('dog-breeds');
fetch(breedListURL)
    .then(response => response.json())
    .then(breedLister);
function breedLister(breedList) {
    let returnedBreeds = breedList.message;
    for (const item in returnedBreeds) {
        let li = document.createElement('li');
        li.textContent = item;
        li.setAttribute('style', 'color: red;');
        li.addEventListener('click', changeColor);
        dogUl === null || dogUl === void 0 ? void 0 : dogUl.appendChild(li);
    }
}
function changeColor(event) {
    if (event.target instanceof HTMLElement) {
        let li = event.target;
        li.setAttribute('style', 'color: blue;');
    }
}
const dropdown = document.getElementById('breed-dropdown');
