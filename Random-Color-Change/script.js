const btn = document.querySelector(".btn");

const randomColor = () => {
  let val = "0123456789ABCDEF";
  let cons = "#";

  for (let i = 0; i < 6; i++) {
    cons = cons + val[Math.floor(Math.random() * 16)];
  }
  return cons;
};
console.log(randomColor());

function changeRandomColor() {
  document.body.style.backgroundColor = randomColor();
}
btn.addEventListener("click", changeRandomColor);
