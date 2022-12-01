const postNewNameForm = document.querySelector("#postNewNameForm");

postNewNameForm.addEventListener("submit", async (event) => {
  event.preventDefault();


  const name2 = document.body.querySelector("#nameInput");
  const name = name2.value.trim();

  try {
    await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        name,
      }),
    });
  } catch (error) {
    alert(error);
  }
});

const getNames = await fetch("http://localhost:5000");
const showNames = await getNames.json();

const nameList = document.querySelector("#namesList");

showNames.forEach((name) => {
  const nameElement = document.createElement("li");

  nameElement.innerText = name;
  nameList.append(nameElement);
});
