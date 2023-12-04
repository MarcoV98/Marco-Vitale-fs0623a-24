class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
}

function addPet() {
    const petName = document.getElementById('name').value;
    const ownerName = document.getElementById('owner').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);

    const petList = document.getElementById('petList');
    const dataPets = petList.children;

    let sameOwner = false;

    for (let element of dataPets) {
        const petOwner = element.textContent.split('Owner: ')[1].trim();
        if (petOwner.toLowerCase === ownerName.toLowerCase) {
            sameOwner = true;
            break;
        }
    }

    console.log(sameOwner);
    inListPet(newPet);
}

function inListPet(newPet) {
    const petList = document.getElementById('petList');
    const item = document.createElement('li');
    item.textContent = `${newPet.petName} - Owner: ${newPet.ownerName} - Species: ${newPet.species} - Breed: ${newPet.breed}`;

    petList.appendChild(item);
}
