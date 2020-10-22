const currentUrlDrinkLetter = () => {
    const testelement = document.getElementById("inputtest");
    const urlString = window.location.href.toLowerCase();
    // urlString.toLowerCase();
    const urlArray = urlString.split("drinksatoz/");
    console.log(urlArray[1]);
};

currentUrlDrinkLetter();