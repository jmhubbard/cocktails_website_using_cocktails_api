const currentUrlDrinkLetter = () => {
    const testelement = document.getElementById("inputtest");
    const urlString = window.location.href.toLowerCase();
    // urlString.toLowerCase();
    const urlArray = urlString.split("drinksatoz/");
    return urlArray[1];
};

const cocktailsByLetter = letter => {
    fetch(`https://morning-spire-15265.herokuapp.com/api/drink-by-letter/${letter}/`)
        .then(response => response.json())
        .then(alldrinks => {
            const albumRows = document.getElementById("albumRow");
            const currentTitle = document.getElementById("pagetitle");
            currentTitle.textContent = `Cocktail Recipies - All ${letter.toUpperCase()} Drinks`;
            
            if(alldrinks == null) {
                const noDrinkMessage = document.createElement("p");
                noDrinkMessage.textContent = "Whoops! There doesn't seem to be any drinks. Try a different letter."
                drinksList.appendChild(noDrinkMessage);
            }
            else {
                for(i = 0;i<alldrinks.length;i++) {
                    const currentDrink = alldrinks[i];
                    const currentDrinkName = currentDrink.name;
                    console.log(currentDrinkName);
                    const currentDrinkPictureUrl = currentDrink.image;
                    const currentDrinkID = currentDrink.id;
                    
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
                };
            }

        })
        .catch(err => {
            console.log(err.message);
        })
};

const setHeaderbyLeader = (letter) => {
    const currentHeader = document.getElementById("atozheader");
    currentHeader.textContent = `"${letter.toUpperCase()}" Cocktails`;
};

const currentLetter = currentUrlDrinkLetter();
cocktailsByLetter(currentLetter);
setHeaderbyLeader(currentLetter);