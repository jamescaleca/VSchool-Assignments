function createShopItem(e){
    const shopItem = document.createElement("li");
    var shopItemValue = document.getElementById("title")
    shopItem.textContent = shopItemValue.value;
    const itemDiv = document.createElement("div");
    var x = document.createElement("button");
    var edit = document.createTextNode("Edit");
    x.appendChild(edit);
    itemDiv.appendChild(x);
    var y = document.createElement("button");
    y.id = "remove";
    var remove = document.createTextNode("X");
    y.appendChild(remove);
    itemDiv.appendChild(y);
    shopItem.appendChild(itemDiv);
    itemDiv.style.padding = "10px";
    shopItem.style.textAlign = "center";
    document.getElementById("list").appendChild(shopItem)
    console.log(shopItem);
    return shopItem
}

document.getElementById("submit").addEventListener("click", (e) => {
    event.preventDefault();
    const shopItem = createShopItem(e);
    document.getElementById("list").appendChild(shopItem);
    document.getElementById("remove").addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
    })
})