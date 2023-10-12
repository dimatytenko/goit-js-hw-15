function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

const createBoxes = (amount) => {
  console.log(amount);
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }
  boxesRef.append(...boxes);
};

const onCreateBtnClick = (value) => {
  createBoxes(value);
};

const onDestroyBtnClick = () => {
  boxesRef.innerHTML = "";
};

let inputValue = 0;

const onInputChange = (event) => {
  console.log(event.target.value);
  console.log(event.currentTarget.value);
  inputValue = event.target.value;
};

inputRef.addEventListener("input", onInputChange);
createBtnRef.addEventListener("click", () => onCreateBtnClick(inputValue));
destroyBtnRef.addEventListener("click", onDestroyBtnClick);
