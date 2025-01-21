const sketchBoard = document.querySelector(".sketch-board");
const gridSize = 16;

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

gut 
