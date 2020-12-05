const container = document.querySelector(".container");
const submitButton = document.getElementById("submit-button");
const input = document.getElementById("input");
const output = document.getElementById("output");
const resultlist = document.getElementById("results");

submitButton.addEventListener("click", (e) => {
  if (input.value === "") {
    output.value = "Please enter a value";
  } else {
    output.value = input.innerText;
    resultlist.value = input.innerText;
  }
});

resultlist.addEventListener("change", (e) => {});
