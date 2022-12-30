//...... selecting DOM parent ......//
const gridcontainer = document.querySelector("#gridcontainer");
let color = "black";
let click = false;

//...... set default grid ......//
function defaultGrid(num) {
    for (let i = 0; i < (num * num); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        let boxSize = 600 / num;
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        gridcontainer.appendChild(box);
        box.addEventListener("mouseover", colorGrid);
    };
}

//...... determine amount of boxes in each row and column ......//
function setGridsize() {
    resetGrid();
    gridSize = slider.value;

    //...... looping create divbox ......//
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const box = document.createElement("div");
        box.classList.add("box");

        //...... calculating pixel size of each box to fit container size ......//
        let boxSize = 600 / gridSize;
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        gridcontainer.appendChild(box);

        //...... click mouseover box to change color ......//
        box.addEventListener("mouseover", colorGrid);
    }
}

document.querySelector('body').addEventListener('mouseup', (e) => {
    click = false;
});
document.querySelector('body').addEventListener('mousedown', (e) => {
    if (e.target.tagname != "BUTTON") {
        click = true;
    }
});

//...... random color......//
const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
};
const getRandomColor = () => {
    const h = getRandomNumber(345);
    const s = "100%";
    const l = "90%";
    return `hsl(${h}, ${s}, ${l})`;
};
const setBackgroundColor = () => {
    color = getRandomColor();
    box.style.backgroundColor = color;
}

//...... color switching between rainbow and black ......//
function changeColor(choice) {
    color = choice;
}

//...... coloring the grid ......//
function colorGrid() {
    if (click) {
        if ((color == "random")) {
            this.style.backgroundColor = getRandomColor();
        }
        if ((color == "shade")) {
            this.style.backgroundColor = "black";
            this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
        }
        if ((color == "erase")) {
            this.style.backgroundColor = "white";
            this.style.opacity = (parseFloat(this.style.opacity) || 0) + 1;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

//...... function to reset existing grid ......//
function resetGrid() {
    let element = document.getElementById("gridcontainer");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//...... function to set all boxes back to white......//
function clearGrid() {
    let nodes = document.getElementById('gridcontainer').childNodes;
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'div') {
            nodes[i].style.background = "white";
            nodes[i].style.opacity = 1;
        }
    }
}

//...... grid size slider ......//
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.textContent = this.value;
}

slider.addEventListener("change", () => {
    resetGrid();
    defaultGrid(slider.value);
})

//...... color wheel color picker ......//
var colorpicker = document.getElementById("colorpicker");

// Update the current slider value (each time you drag the slider handle)
colorpicker.oninput = function () {
    colorpicker.addEventListener("change", () => {
        color = colorpicker.value;
        colorGrid(color);
    })
}

defaultGrid(16);