const getUserInfoButton = document.querySelector("#get-user-info-button");
const userParagraph = document.createElement("p");

getUserInfoButton.addEventListener("click", async () => {
  const userId = document.querySelector("#userId").value.trim();

  const response = await fetch(`http://localhost:5000/${userId}`);
  const user = await response.json();

  userParagraph.textContent = Json.stringify(user);

  document.body.append(userParagraph);
});
