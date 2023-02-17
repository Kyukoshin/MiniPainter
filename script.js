let colori;
const defaultColor = "#BD0A0A";

window.addEventListener("load", startup, false);

function startup() {
    colori = document.querySelector("#armorColor");
    colori.value = defaultColor;
    colori.addEventListener("input", updateFirst, false);
    colori.addEventListener("change", updateAll, false);
}

function updateFirst(event) {
    const p = document.querySelector(".armor");
    if (p) {
        console.log("yes");
        p.style.filter = "opacity(0.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateAll(event) {
    document.querySelectorAll("p").forEach((p) => {
        p.style.color = event.target.value;
    });
}
