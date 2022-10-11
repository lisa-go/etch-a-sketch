
    //...... selecting DOM parent ......//
    const gridcontainer = document.querySelector("#gridcontainer");      
    let color = "black";
    let click = false;


    //...... set default grid ......//
function defaultGrid(num) {
     for (let i = 0; i < (num * num); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        let boxSize = 800 / num;
        box.style.width = boxSize + "px";
        box.style.height = boxSize + "px";
        gridcontainer.appendChild(box);
            box.addEventListener("mouseover", colorGrid);
        };
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

    //...... click mouseover box to change color ......//
    box.addEventListener("mouseover", colorGrid);
    } 
}
    
    document.querySelector('body').addEventListener('mouseup', (e) =>{
        click = false;
    });
    document.querySelector('body').addEventListener('mousedown', (e) =>{
        if (e.target.tagname != "BUTTON"){
        click = true;
        }
    });


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
        if((color == "random")) {
        this.style.backgroundColor = getRandomColor();
        }
        if ((color == "shade")) {
            this.style.backgroundColor = "black";
            this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
        }
        this.style.backgroundColor = color;
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
    for(let i=0; i<nodes.length; i++) {
        if (nodes[i].nodeName.toLowerCase() == 'div') {
             nodes[i].style.background = "white";
             nodes[i].style.opacity = 1;
         }
    }
}


defaultGrid(16);
