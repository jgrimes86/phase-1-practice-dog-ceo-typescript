console.log('%c HI', 'color: firebrick')

const randomDogURL = "https://dog.ceo/api/breeds/image/random/4";
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array

// {
//     "message": "https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_2778.jpg",
//     "status": "success"
// }

interface Dog {
    message: string,
    status: string
}

// {
//     "message": {
//         "affenpinscher": [],
//         "african": [],
//         "airedale": [],
//         "akita": [],
//         "appenzeller": [],
//         "australian": [
//             "shepherd"
//         ],
//      ...
//      }
//     "status": "success"
// }

interface BreedList {
    message: Breeds,
    status: string
}

interface Breeds {
    [breed: string]: string[]
}

const dogContainer: HTMLElement | null = document.getElementById('dog-image-container');

fetch(randomDogURL)
    .then(response => response.json())
    .then(imagePopulator)

function imagePopulator(dogImage: Dog) {
    let returnedDogs: string = dogImage.message;
    for(const item of returnedDogs) {
        let img = document.createElement('img');
        img.src = item;
        dogContainer?.appendChild(img)
    }
}


const breedListURL = "https://dog.ceo/api/breeds/list/all";

const dogUl: HTMLElement | null = document.getElementById('dog-breeds');

fetch(breedListURL)
    .then(response => response.json())
    .then(breedLister)

function breedLister(breedList: BreedList) {
    let returnedBreeds: Breeds = breedList.message;

    for(const item in returnedBreeds) {
        let li: HTMLElement = document.createElement('li');
        li.textContent = item;
        li.setAttribute('style', 'color: red;')
        li.addEventListener('click', changeColor)
        dogUl?.appendChild(li)
    }
}

function changeColor(event: Event) {
    if (event.target instanceof HTMLElement) {
        let li = event.target;
        li.setAttribute('style', 'color: blue;')
    }
}

const dropdown = document.getElementById('breed-dropdown');