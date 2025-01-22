const sketchBoard = document.querySelector(".sketch-board");
const setGridSize = document.querySelector(".set-grid-size");
const reset = document.querySelector(".reset");
const dialog = document.querySelector("dialog");

const gridSize = 16;

setGridSize.addEventListener("click", () => {
	dialog.showModal();
});



function createOneRow(gridSize = 16) {
	let newRow = document.createElement("div");
	newRow.classList.add("row");
	sketchBoard.appendChild(newRow);

	for (let i = 0; i < gridSize; i++) {
		let box = document.createElement("div");
		box.classList.add("box");
		newRow.appendChild(box);
	}
}

function createGrid(gridSize = 16) {
	for (let i = 0; i < gridSize; i++) {
		createOneRow(gridSize);
	}
}

createGrid(5);

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
	box.addEventListener("mouseenter", () => {
		box.classList.add("color-box");
		// box.style.backgroundColor = "cyan";
		// box.setAttribute("style", "background: cyan;");
	});
});

reset.addEventListener("click", () => {
	boxes.forEach((box)=> {
		box.classList.remove("color-box");
	})
});
