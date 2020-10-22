
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

fetchRandomDrink1();
fetchRandomDrink2();
fetchRandomDrink3();