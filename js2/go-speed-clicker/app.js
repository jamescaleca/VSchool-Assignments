let clickCount = 0;

window.addEventListener("click", (e) => {
    e.preventDefault();
    clickCount++;
    //setter
    localStorage.setItem("clickCountStor", clickCount);
    document.getElementById("h1Click").textContent = clickCount;
});

//getter
clickCount = JSON.parse(localStorage.getItem("clickCountStor"));

document.getElementById("h1Click").textContent = clickCount;