const letterLinks = document.getElementById("dropdownmenu");

const createLetterNav = () => {
    const navSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for(let i = 0; i < navSymbols.length; i++) {
        const letterAnchor = document.createElement("a");
        letterAnchor.id = navSymbols[i];
        letterAnchor.className = "dropdown-item";
        letterAnchor.textContent = navSymbols[i];
        letterAnchor.href = `/drinksAtoZ/${navSymbols[i]}`;
        letterLinks.appendChild(letterAnchor);
    };
    for(let j = 1; j < 10; j++) {
        const numberAnchor = document.createElement("a");
        numberAnchor.id = j;
        numberAnchor.className = "dropdown-item";
        numberAnchor.textContent = j;
        numberAnchor.href = `/drinksAtoZ/${j}`;
        letterLinks.appendChild(numberAnchor);
    };
};

createLetterNav();

