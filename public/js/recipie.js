const currentDrinkID = () => {
    const testelement = document.getElementById("inputtest");
    const urlString = window.location.href.toLowerCase();
    // urlString.toLowerCase();
    const urlArray = urlString.split("recipie/");
    return urlArray[1];
};

const cocktailRecipie = id => {
    fetch(`https://morning-spire-15265.herokuapp.com/api/drink-detail/${id}/`)
        .then(response => response.json())
        .then(currentDrink => {
            console.log(currentDrink);
            const albumRows = document.getElementById("albumRow");

            if(currentDrink == null) {
                const noDrinkMessage = document.createElement("p");
                noDrinkMessage.textContent = "Whoops! There doesn't seem to be any drinks. Try a different letter."
                drinksList.appendChild(noDrinkMessage);
            }
            else {
                const currentDrinkName = currentDrink.name;
                const currentDrinkPictureUrl = currentDrink.image;
                const firstDiv = document.createElement("div");
                firstDiv.className = "col-md-4";
                // firstDiv.className = "mx-auto";

                const secondDiv = document.createElement("div");
                secondDiv.classList.add("card", "mb-4", "shadow-sm");
                // secondDiv.classList.add("card", "w-100", "shadow-sm");
                // secondDiv.style.width = "30rem";

                const thirdDiv = document.createElement("div");
                thirdDiv.className = "card-body";

                const drinkImageElement = document.createElement("img");
                drinkImageElement.src = currentDrinkPictureUrl;
                drinkImageElement.className = "card-img-top";
                const drinkName = document.createElement("h3");
                drinkName.className = "card-text";
                drinkName.textContent = currentDrinkName;

                const drinkIngredientText = document.createElement("h4");
                drinkIngredientText.textContent = "Ingredients:";

                const drinkIngredientList = document.createElement("ul");
                
                const currentIngredientList = currentDrink.ingredients;

                for(let i = 0; i < currentIngredientList.length; i++) {
                    const currentIngredient = currentIngredientList[i].name
                    const currentIngredientAmount = currentIngredientList[i].amount
                    if(currentIngredient != null && currentIngredientAmount != null) {
                        const newIngredientListItem = document.createElement("li");
                        newIngredientListItem.textContent = `${currentIngredientAmount} ${currentIngredient}`;
                        drinkIngredientList.appendChild(newIngredientListItem);
                    }
                    else if (currentIngredient != null && currentIngredientAmount == null) {
                        const newIngredientListItem = document.createElement("li");
                        newIngredientListItem.textContent = `${currentIngredient}`;
                        drinkIngredientList.appendChild(newIngredientListItem);
                    };
                };

                const drinkDirections = document.createElement("p");
                drinkDirections.textContent = currentDrink.instructions;
                
                albumRows.appendChild(firstDiv);

                firstDiv.appendChild(secondDiv);

                secondDiv.appendChild(drinkImageElement);
                secondDiv.appendChild(thirdDiv);

                thirdDiv.appendChild(drinkName);
                thirdDiv.appendChild(drinkIngredientText);
                thirdDiv.appendChild(drinkIngredientList);
                thirdDiv.appendChild(drinkDirections);

                const currentTitle = document.getElementById("pagetitle");
                currentTitle.textContent = `Cocktail Recipes - ${currentDrinkName}`;
            };

        })
        .catch(err => {
            console.log(err.message);
        });
};

const DrinkID = currentDrinkID();
cocktailRecipie(DrinkID);
