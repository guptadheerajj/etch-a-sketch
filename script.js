const sketchBoard = document.querySelector(".sketch-board");
const setGridSize = document.querySelector(".set-grid-size");
const reset = document.querySelector(".reset");
const dialog = document.querySelector("dialog");
const input = document.querySelector("#size");
const dialogCancel = document.querySelector("#dialog-cancel");
const dialogConfirm = document.querySelector("#dialog-confirm");

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

function createGrid(gridSize) {
	while (sketchBoard.firstChild) {
		sketchBoard.removeChild(sketchBoard.firstChild);
	}

	for (let i = 0; i < gridSize; i++) {
		createOneRow(gridSize);
	}
}

const colorChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getOneChar(index) {
	return colorChar[index];
}

function generateRandomColor() {
	let hexCode = "#";
	for (let i = 0; i < 6; i++) {
		let index = Math.floor(Math.random() * 16);
		hexCode += getOneChar(index);
	}
	return hexCode;
}

dialog.addEventListener("close", () => {
	console.log(dialog.returnValue);
	createGrid(dialog.returnValue);
	const boxes = document.querySelectorAll(".box");

	boxes.forEach((box) => {
		box.addEventListener("mouseenter", () => {
			// box.classList.add("color-box");
			let randomColor = generateRandomColor();
			box.style.backgroundColor = randomColor;
		});
	});

	reset.addEventListener("click", () => {
		boxes.forEach((box) => {
			// box.classList.remove("color-box");
			box.style.backgroundColor = "#ffffffff";
		});
	});
});

dialogCancel.addEventListener("click", () => {
	console.log(dialogCancel.value);
});

dialogConfirm.addEventListener("click", (event) => {
	event.preventDefault();
	dialog.close(input.value);
});
