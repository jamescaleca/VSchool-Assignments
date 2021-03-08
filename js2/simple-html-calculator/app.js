const calculator = document["calculator"];
const addition = calculator["add"]

calculator.addEventListener("submit", (e) => {
    e.preventDefault();

    const addFirst = calculator["addFirstNum"].value;
    const addSecond = calculator["addSecondNum"].value;
    const subFirst = calculator["subFirstNum"].value;
    const subSecond = calculator["subSecondNum"].value;
    const multFirst = calculator["multFirstNum"].value;
    const multSecond = calculator["multSecondNum"].value;

    calculator["addFirstNum"].value = "";
    calculator["addSecondNum"].value = "";
    calculator["subFirstNum"].value = "";
    calculator["subSecondNum"].value = "";
    calculator["multFirstNum"].value = "";
    calculator["multSecondNum"].value = "";

    const addH1 = document.createElement('h1');
    const subH1 = document.createElement('h1');
    const multH1 = document.createElement('h1');
    
    const added = Number(addFirst) + Number(addSecond);
    const subtracted = Number(subFirst) - Number(subSecond);
    const multiplied = Number(multFirst) * Number(multSecond);

    addH1.textContent = added;
    subH1.textContent = subtracted;
    multH1.textContent = multiplied;
    
    if (added != 0) {
        document.getElementsByTagName("body")[0].append(addH1);
        return;
    }
    if (subtracted != 0) {
        document.getElementsByTagName("body")[0].append(subH1);
        return;
    }
    if (multiplied != 0) {
        document.getElementsByTagName("body")[0].append(multH1);
        return;
    }
})
