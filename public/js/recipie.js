const currentDrinkID = () => {
    const testelement = document.getElementById("inputtest");
    const urlString = window.location.href.toLowerCase();
    // urlString.toLowerCase();
    const urlArray = urlString.split("recipie/");
    return urlArray[1];
};

const cocktailRecipie = id => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(alldrinks => {
            const albumRows = document.getElementById("albumRow");
            
            if(alldrinks.drinks == null) {
                const noDrinkMessage = document.createElement("p");
                noDrinkMessage.textContent = "Whoops! There doesn't seem to be any drinks. Try a different letter."
                drinksList.appendChild(noDrinkMessage);
            }
            else {
                for(i = 0;i<alldrinks.drinks.length;i++) {
                    const currentDrink = alldrinks.drinks[i];
                    const currentDrinkName = currentDrink.strDrink;
                    const currentDrinkPictureUrl = currentDrink.strDrinkThumb;
                    
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

                    const viewButton = document.createElement("button");
                    viewButton.type = "button";
                    viewButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
                    viewButton.textContent = "View Cocktail";

                    
                    albumRows.appendChild(firstDiv);
                    firstDiv.appendChild(secondDiv);
                    secondDiv.appendChild(drinkImageElement);
                    secondDiv.appendChild(thirdDiv);
                    thirdDiv.appendChild(drinkName);
                    thirdDiv.appendChild(fourthDiv);
                    fourthDiv.appendChild(fifthDiv);
                    fifthDiv.appendChild(viewButton);

                    
                };
            }

        })
        .catch(err => {
            console.log(err.message);
        })
};

const DrinkID = currentDrinkID();
cocktailRecipie(DrinkID);