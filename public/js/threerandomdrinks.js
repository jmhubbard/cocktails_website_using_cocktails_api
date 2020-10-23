
const fetchRandomDrink1 = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(randomDrink => {
            const drink = randomDrink.drinks[0];
            const drinkName = drink.strDrink;
            const drinkImageURL = drink.strDrinkThumb;

            const randoDrinkName1 = document.getElementById("randomDrinkName1");
            randoDrinkName1.textContent = drinkName;

            const randoDrinkImageURL1 = document.getElementById("randomDrinkImage1");
            randoDrinkImageURL1.src = drinkImageURL;
            
        })
        .catch(err => {
            console.log(err.message);
        });
};

const fetchRandomDrink2 = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(randomDrink => {
            const drink = randomDrink.drinks[0];
            const drinkName = drink.strDrink;
            const drinkImageURL = drink.strDrinkThumb;

            const randoDrinkName1 = document.getElementById("randomDrinkName2");
            randoDrinkName1.textContent = drinkName;

            const randoDrinkImageURL1 = document.getElementById("randomDrinkImage2");
            randoDrinkImageURL1.src = drinkImageURL;
            
        })
        .catch(err => {
            console.log(err.message);
        });
};

const fetchRandomDrink3 = () => {
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(randomDrink => {
        const drink = randomDrink.drinks[0];
        const drinkName = drink.strDrink;
        const drinkImageURL = drink.strDrinkThumb;

        const randoDrinkName1 = document.getElementById("randomDrinkName3");
        randoDrinkName1.textContent = drinkName;

        const randoDrinkImageURL1 = document.getElementById("randomDrinkImage3");
        randoDrinkImageURL1.src = drinkImageURL;
        
    })
    .catch(err => {
        console.log(err.message);
    });
};

const randomCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(randomDrink => {
            const albumRows = document.getElementById("albumRow");        
            const currentDrink = randomDrink.drinks[0];
            const currentDrinkName = currentDrink.strDrink;
            const currentDrinkPictureUrl = currentDrink.strDrinkThumb;
            const currentDrinkID = currentDrink.idDrink;
            
            const firstDiv = document.createElement("div");
            firstDiv.className = "col-md-4";
            const secondDiv = document.createElement("div");
            secondDiv.classList.add("card", "mb-4", "shadow-sm");
            const thirdDiv = document.createElement("div");
            thirdDiv.className = "card-body";


            const drinkImageElement = document.createElement("img");
            drinkImageElement.src = currentDrinkPictureUrl;
            drinkImageElement.className = "card-img-top";
            // drinkImageElement.style.width = 150px;

            const drinkName = document.createElement("p");
            drinkName.className = "card-text";
            drinkName.textContent = currentDrinkName;

            const fourthDiv = document.createElement("div");
            fourthDiv.classList.add("d-flex", "justify-content-center");

            const fifthDiv = document.createElement("div");
            fifthDiv.className = "btn-group";

            const viewButton = document.createElement("a");
            viewButton.role = "button";
            viewButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
            viewButton.textContent = "View Cocktail";
            viewButton.href = `/recipie/${currentDrinkID}`;

            albumRows.appendChild(firstDiv);
            firstDiv.appendChild(secondDiv);
            secondDiv.appendChild(drinkImageElement);
            secondDiv.appendChild(thirdDiv);
            thirdDiv.appendChild(drinkName);
            thirdDiv.appendChild(fourthDiv);
            fourthDiv.appendChild(fifthDiv);
            fifthDiv.appendChild(viewButton);
        })
        .catch(err => {
            console.log(err.message);
        });
};

// fetchRandomDrink1();
// fetchRandomDrink2();
// fetchRandomDrink3();

for(let i = 0; i < 3; i++) {
    randomCocktail();
};