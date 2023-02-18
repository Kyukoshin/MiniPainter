let colorArmor;
let colorMetal
let colorHighlights
let colorWeapon
let colorAccessories
let colorBase
const defaultColorArmor = "#091ebd";
const defaultColorMetal = "#ffb300";
const defaultColorHighlights = "#ffb300";
const defaultColorWeapon = "#000000";
const defaultColorAccessories = "#a33400";
const defaultColorBase = "#a33400";

window.addEventListener("load", startup, false);

function startup() {
    colorArmor = document.querySelector("#armorColor");
    colorArmor.value = defaultColorArmor;
    colorArmor.addEventListener("input", updateFirstArmor, false);

    colorMetal = document.querySelector("#metalColor");
    colorMetal.value = defaultColorMetal;
    colorMetal.addEventListener("input", updateFirstMetal, false);

    colorHighlights = document.querySelector("#highlightsColor");
    colorHighlights.value = defaultColorHighlights;
    colorHighlights.addEventListener("input", updateFirstHighlights, false);

    colorWeapon = document.querySelector("#weaponColor");
    colorWeapon.value = defaultColorWeapon;
    colorWeapon.addEventListener("input", updateFirstWeapon, false);

    colorAccessories = document.querySelector("#accessoriesColor");
    colorAccessories.value = defaultColorAccessories;
    colorAccessories.addEventListener("input", updateFirstAccessories, false);

    colorBase = document.querySelector("#baseColor");
    colorBase.value = defaultColorBase;
    colorBase.addEventListener("input", updateFirstBase, false);
}

function updateFirstArmor(event) {
    const p = document.querySelector(".armor");
    if (p) {
        console.log("yes");
        p.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateFirstMetal(event) {
    const q = document.querySelector(".metal");
    if (q) {
        console.log("yes");
        q.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateFirstHighlights(event) {
    const r = document.querySelector(".highlights");
    if (r) {
        console.log("yes");
        r.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateFirstWeapon(event) {
    const s = document.querySelector(".weapon");
    if (s) {
        console.log("yes");
        s.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateFirstAccessories(event) {
    const t = document.querySelector(".accessories");
    if (t) {
        console.log("yes");
        t.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}

function updateFirstBase(event) {
    const u = document.querySelector(".base");
    if (u) {
        console.log("yes");
        u.style.filter = "opacity(.3) drop-shadow(0 0 0 "+event.target.value+")";
    }
}