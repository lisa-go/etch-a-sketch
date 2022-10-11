
    //...... selecting DOM parent ......//
    const gridcontainer = document.querySelector("#gridcontainer");      

    //...... random color......//
    const getRandomNumber = (maxNum) => {
        return Math.floor(Math.random() * maxNum);
      };
      const getRandomColor = () => {
        const r = getRandomNumber(256);
        const g = getRandomNumber(256);
        const b = getRandomNumber(256);
       
        return `rgb(${r}, ${g}, ${b})`;
      };
      const setBackgroundColor = () => {
        const randomColor = getRandomColor();
        document.getElementsByClassName("box").style.backgroundColor = randomColor;
    }
    

    //...... set default grid ......//
function defaultGrid() {
     for (let i = 0; i < (16 * 16); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        let boxSize = 800 / 16;
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        gridcontainer.appendChild(box);
            box.addEventListener("mouseover", () => {
            box.style.backgroundColor = getRandomColor();
        });
            } 
}


    //...... determine amount of boxes in each row and column ......//
function setGridsize() {
    resetGrid();
    gridSize = prompt("Set the size of the grid (max. 100)");
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
        box.style.backgroundColor = getRandomColor();
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



defaultGrid();
