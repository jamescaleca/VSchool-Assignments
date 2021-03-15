const form = document.enemies

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const goombaCount = form.goombas.value;
    form.goombas.value = "";
    const bobombCount = form.bobombs.value;
    form.bobombs.value = "";
    const cheepcheepCount = form.cheepcheeps.value; 
    form.cheepcheeps.value = "";

    goombaCost = goombaCount * 5;
    bobombCost = bobombCount * 7;
    cheepcheepCost = cheepcheepCount * 11;

    totalCost = goombaCost + bobombCost + cheepcheepCost;
    
    document.getElementById("totalCostH2").textContent = `Total Cost: ${totalCost} Coins`
    
})