
    //...... selecting DOM parent ......//
    const gridcontainer = document.querySelector("#gridcontainer");      

    //...... determine amount of boxes in each row and column ......//
function setGridsize() {
    resetGrid();
    let gridSize = prompt("Set the size of the grid (max. 100)");
    
    if (gridSize > 100) {
        alert("invalid");
        return;
    }

    //...... looping create divbox ......//
    for (let i = 0; i < (gridSize * gridSize); i++) {
const box = document.createElement("div");
box.classList.add("box");

    //...... calculating pixel size of each box to fit container size ......//
let boxSize = 800 / gridSize;
box.style.width = boxSize + "px";
box.style.height = boxSize + "px";


gridcontainer.appendChild(box);

    //...... mouseover box to change color ......//
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "pink";
});
    } 
}

    //...... function to reset existing grid ......//
function resetGrid() {
    let element = document.getElementById("gridcontainer");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
}