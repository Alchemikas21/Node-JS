const { response } = require("express");

carSendButton.addEventListener("click", async () => {
  const carInput = document.querySelector("#car-input").value.trim();
  const carSendButton = document.querySelector("#car-send-button");
  const list = document.getElementById("unordered-list");

  const respose = await fetch(`http://localhost:5000/${carInput}`);
  const car = await response.json();
  carList.textContent = Json.stringify(car);

  const createdListEllement = document.createElement("li");
  list.appendChild(createdListEllement);
  carSendButton.textContent = "hello";
});
