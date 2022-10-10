
    //...... selecting DOM parent ......//
    const gridcontainer = document.querySelector("#gridcontainer");

    //...... determine amount of boxes in each row and column ......//
    let boxAmount = 64;

    //...... looping create divbox ......//
    for (let i = 0; i < (boxAmount * boxAmount); i++) {
const box = document.createElement("div");
box.classList.add("box");

    //...... calculating pixel size of each box to fit container size ......//
let boxSize = 960 / boxAmount;
box.style.width = boxSize + "px";
box.style.height = boxSize + "px";

gridcontainer.appendChild(box);

    //...... mouseover box to change color ......//
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "pink";
});
    }


