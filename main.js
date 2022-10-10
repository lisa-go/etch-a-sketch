
    //...... selecting DOM parent ......//
    const container = document.querySelector("#gridcontainer");

    //...... looping create divbox ......//
    for (let i = 0; i < (16 * 16); i++) {
const box = document.createElement("div");
box.classList.add("box");
container.appendChild(box);

box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "pink";
});
    }


