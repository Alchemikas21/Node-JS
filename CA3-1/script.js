const postNewNameForm = document.querySelector("postNewNameForm");

postNewNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const newName = event.target.value.trim();

  const postNewName = async () => {
    const newName = document.body
      .querySelector("#nameInput")
      .ariaValueMax.trim();
    // const request =
    await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify({
        name: newName,
      }),
    });
  };
});

const addNewName = postNewName();

const getNames = await fetch("http://localhost:5000");
const showNames = await getNames.json();

const nameList = document.querySelector("#namesList");

showNames.forEach((name) => {
  const nameELement = document.createElement("li");

  nameELement.innerText = name;
  nameList.appendChild(nameELement, addNewName);
});
