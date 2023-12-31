const container = document.querySelector(".container");
const slider = document.querySelector("#slider");
let gridSize;

const sliderValue = document.querySelector("#slider-value");
sliderValue.textContent = "16 x 16"

const coloring = document.querySelector("#color-mode");
const rainbow = document.querySelector("#rainbow-mode");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// The default look (16x16)
window.addEventListener("load", () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("childDiv");
        div.style.width = 32.5 + "px"; // define the default size
        container.appendChild(div); // add to the container
    };

    // listen to the color
    const colorPicked = document.querySelector("#colorPicker");
    let colorPickedValue = "#1d3461";
    
    colorPicked.addEventListener("input", () => {
        colorPickedValue = colorPicked.value;
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = colorPickedValue;
        }));
    });

    // change brush color (palette)
    const square = document.querySelectorAll(".childDiv");
    square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
        childDiv.style.backgroundColor = colorPickedValue;
    }));

    // coloring mode
    coloring.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = colorPickedValue;        
        }));
    });
    
    // clean the pad
    clear.addEventListener("click", () => {
        square.forEach(function(one) {
            one.style.backgroundColor = "white";
        })
    });

    // erase
    eraser.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = "white";        
        }));
    });

    // rainbow mode
    rainbow.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            const randomIndex = Math.floor(Math.random() * rainbowColors.length);
            childDiv.style.backgroundColor = rainbowColors[randomIndex];
        }));
    });
});


//other grid sizes
slider.addEventListener("input", function() {
    gridSize = slider.value;
    const calWidth = 520 / gridSize;
    sliderValue.textContent = `${gridSize}` + " x " + `${gridSize}`;
    container.innerHTML = ''; // clears all the content inside the div
    //make the grid
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const div = document.createElement("div");
        div.classList.add("childDiv");
        div.style.width = calWidth + "px"; // define the size
        container.appendChild(div); // add to the container
    };
    
    // listen to the color
    const colorPicked = document.querySelector("#colorPicker");
    let colorPickedValue = "#1d3461";
    
    colorPicked.addEventListener("input", () => {
        colorPickedValue = colorPicked.value;
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = colorPickedValue;
        }));
    });

    // change brush color (palette)
    const square = document.querySelectorAll(".childDiv");

    square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
        childDiv.style.backgroundColor = colorPickedValue;
    }));

    // coloring mode
    coloring.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = colorPickedValue;        
        }));
    });
    
    // clean the pad
    clear.addEventListener("click", () => {
        square.forEach(function(one) {
            one.style.backgroundColor = "white";
        })
    });

    // erase
    eraser.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            childDiv.style.backgroundColor = "white";        
        }));
    });

    // rainbow mode
    rainbow.addEventListener("click",() => {
        square.forEach((childDiv) => childDiv.addEventListener("mouseenter", () => {
            const randomIndex = Math.floor(Math.random() * rainbowColors.length);
            childDiv.style.backgroundColor = rainbowColors[randomIndex];
        }));
    });
});
