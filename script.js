let colorArmor;
const defaultColor = "#BD0A0A";

window.addEventListener("load", startup, false);

function startup() {
    colorArmor = document.querySelector("#armorColor");
    colorArmor.value = defaultColor;
    colorArmor.addEventListener("input", updateFirst, false);
    colorArmor.addEventListener("change", updateAll, false);
}

function updateFirst(event) {
    const p = document.querySelector(".armor");
    if (p) {
        console.log("yes");
        p.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateAll(event) {
    document.querySelectorAll("p").forEach((p) => {
        p.style.color = event.target.value;
    });
}
