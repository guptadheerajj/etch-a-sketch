const sketchBoard = document.querySelector(".sketch-board");
const setGridSize = document.querySelector(".set-grid-size");
const reset = document.querySelector(".reset");
const dialog = document.querySelector("dialog");
const input = document.querySelector("#size");
const dialogConfirm = document.querySelector("#dialog-confirm");

setGridSize.addEventListener("click", () => {
	dialog.showModal();
});

function createOneRow(gridSize) {
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
	const boxes = document.querySelectorAll(".box");
	addListenersToBox(boxes);
}

function addListenersToBox(boxes) {
	boxes.forEach((box) => {
		let timesMouseEnter = 0;
		box.addEventListener("mouseenter", () => {
			// box.classList.add("color-box");
			timesMouseEnter++;
			let opacityValue = `${10 * timesMouseEnter}%`;
			let randomColor = generateRandomColor();
			box.style.backgroundColor = randomColor;
			if (timesMouseEnter !== 10) {
				box.style.opacity = opacityValue;
			}
		});
	});

	reset.addEventListener("click", () => {
		boxes.forEach((box) => {
			// box.classList.remove("color-box");
			box.style.backgroundColor = "#ffffffff";
			box.style.opacity = "100%"
		});
	});
}

// create grid of size 16 by default
createGrid(16);

const colorChar = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

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
	createGrid(dialog.returnValue);
});

dialogConfirm.addEventListener("click", (event) => {
	event.preventDefault();
	dialog.close(input.value);
});
