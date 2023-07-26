const input = document.getElementById("numberOfWord");
const button1 = document.querySelector("button");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < n; i++) {
    text += letters[Math.floor(Math.random() * 51)];
  }

  return text;
};

let words;
const myfunc = () => {
  words = Number(input.value);
  if (words > 10000) return alert("its too big");
  const para = document.createElement("p");

  let data = "";
  for (let i = 0; i < words; i++) {
    const randomNoOfLetters = (Math.random() * 15).toFixed(0);
    data += generateWord(randomNoOfLetters);
    data += " ";
  }
  console.log(data);
  para.classList.add("para");
  para.innerText = data;
  container.append(para);
  input.value = "";
};
button1.addEventListener("click", myfunc);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (input.value !== "") {
      button1.click();
    }
  }
});
