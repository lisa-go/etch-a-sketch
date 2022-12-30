<h1 align="center"> etch-a-sketch
<img src="https://img.icons8.com/office/40/null/paint-palette.png" alt="paint" width="35" /> </h1>  

#### Click [here](https://lisa-go.github.io/etch-a-sketch/) for live preview.
<br>

# Made with

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<br>

# Description
#### One of my earliest javascript projects - a drawing board resembling an etch-a-sketch, with a number of different features.
<br>

# Features
- A grid size slider which controls the amount of divs on the x and y axis.
- A color picker.
- A random color setting.
- A shading setting which darkens a div each time it is clicked.
- An erase tool and a clear all tool.
<br>

# Previews

### Home Page
<img src="https://i.imgur.com/25dubso.png" alt="homepage" width="700" />
<br>

# Things I learned from this Project

* How to implement a slider input with html and css.
* Using outline instead of border will avoid pushing the divs out of place in the grid.
```css
.box {
    background-color: white;
    margin: 0;
    padding: 0;
    outline: 1px solid #cccccc;
}
```
* Touched a bit on the 'active' pseudoclass to give the buttons a bit of a 3d effect when pressed.
```css
.button-container button:active {
    box-shadow: 0 5px #858484;
    background-color: #a06af8;
    transform: translateY(2px);
}
```
* Understanding of how to reuse a function so there is less code redundancy.
* How to set up a random color picker. I didn't randomize all the values as I wanted to only use the colors with 100% saturation and 90% lightness.
```js 
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
```
* How to change the opacity of a div on each click
```js
this.style.opacity = (parseFloat(this.style.opacity) || 0) + 0.1;
```
* How to remove divs
```js
function resetGrid() {
    let element = document.getElementById("gridcontainer");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
```
