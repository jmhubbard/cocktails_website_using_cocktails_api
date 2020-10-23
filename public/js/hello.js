// Update the "content" DOM element




const cocktailsByLetter = letter => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(response => response.json())
        .then(alldrinks => {
            const drinksList = document.getElementById("cocktaillist");
            drinksList.innerHTML = "";

            if(alldrinks.drinks == null) {
                const noDrinkMessage = document.createElement("p");
                noDrinkMessage.textContent = "Whoops! There doesn't seem to be any drinks. Try a different letter."
                drinksList.appendChild(noDrinkMessage);
            }
            else {
                for(i = 0;i<alldrinks.drinks.length;i++) {
                    const currentDrink = alldrinks.drinks[i]
    
                    const underlineElement = document.createElement("U");
                    const drinkName = document.createElement("h3");
                    drinkName.textContent = currentDrink.strDrink;
                    underlineElement.appendChild(drinkName);
    
                    const drinkPicture = document.createElement("img");
                    drinkPicture.src = currentDrink.strDrinkThumb;
                    drinkPicture.style.width = "150px";
    
                    const ingredientHeader = document.createElement("h3");
                    ingredientHeader.textContent = "Ingredients:";
    
                    const ingredientList = document.createElement("ul");
    
                    const ingredientStr = "strIngredient";
                    const ingredientAmount = "strMeasure";
    
                    for(item = 1; item <= 25; item++) {
                        const currentIngredient = currentDrink[ingredientStr + item];
                        const currentIngredientAmount = currentDrink[ingredientAmount + item]; 
                        if(currentIngredient != null && currentIngredientAmount != null) {
                            const newIngredientListItem = document.createElement("li");
                            newIngredientListItem.textContent = `${currentIngredientAmount} ${currentIngredient}`;
                            ingredientList.appendChild(newIngredientListItem);
                        }
                        else if (currentIngredient != null && currentIngredientAmount == null) {
                            const newIngredientListItem = document.createElement("li");
                            newIngredientListItem.textContent = `${currentIngredient}`;
                            ingredientList.appendChild(newIngredientListItem);
                        }
                    };
    
                    const drinkRecipie = document.createElement("p");
                    drinkRecipie.textContent = currentDrink.strInstructions;
                    
                    drinksList.appendChild(underlineElement);
                    drinksList.appendChild(drinkPicture);
                    drinksList.appendChild(ingredientHeader);
                    drinksList.append(ingredientList);
                    drinksList.appendChild(drinkRecipie);
                    
                };
            }

        })
        .catch(err => {
            console.log(err.message);
        })
};


const letterLinks = document.getElementById("letterNav");

const createLetterNav = () => {
    const navSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let i = 0; i < navSymbols.length; i++) {
        const letterAnchor = document.createElement("a");
        letterAnchor.id = navSymbols[i];
        letterAnchor.textContent = navSymbols[i];
        letterAnchor.href = "#";
        letterAnchor.addEventListener("click", e => {
            e.preventDefault();
            const lowercaseLetter = e.target.id.toLowerCase()
            cocktailsByLetter(lowercaseLetter);
        });
        letterLinks.appendChild(letterAnchor);
        letterLinks.appendChild(document.createTextNode(" | "));
    };
    for(let j = 1; j < 10; j++) {
        const numberAnchor = document.createElement("a");
        numberAnchor.id = j;
        numberAnchor.textContent = j;
        numberAnchor.href = "#";
        numberAnchor.addEventListener("click", e => {
            e.preventDefault();
            cocktailsByLetter(e.target.id);
        });
        letterLinks.appendChild(numberAnchor);
        letterLinks.appendChild(document.createTextNode(" | "));
    };
};

createLetterNav()
// cocktailsByLetter('a');