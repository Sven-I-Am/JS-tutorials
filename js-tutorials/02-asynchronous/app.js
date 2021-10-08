// Promise handling

//Display random joke using the Joke API
////////////////////////////////////////////////////ASYNC - AWAIT////////////////////////////////////////////////////////////////
const getRandomJoke = async () => {
  try {
    let data = await fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`);
    let parsedData = await data.json();
    console.log(parsedData);
    if (parsedData.joke) {
      console.log(parsedData.joke);
    } else {
      console.log(parsedData.setup);
      console.log(parsedData.delivery);
    }
  } catch (error) {
    console.log(error);
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////THEN - CATCH////////////////////////////////////////////////////////////////
/*const getRandomJoke = async () => {
  fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
    .then((data) => {
      data.json().then((parsedData) => {
        console.log(parsedData);
        if (parsedData.joke) {
          console.log(parsedData.joke);
        } else {
          console.log(parsedData.setup);
          console.log(parsedData.delivery);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("btn").addEventListener("click", getRandomJoke);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Display a joke from a selected category from the JokeAPI
//Get joke with the selected category

//Part of Approach 2
const getCategories = async () => {
  try {
    const data = await fetch("https://v2.jokeapi.dev/categories");
    const parsedData = await data.json();
    const categories = [];
    for (let category of parsedData.categories) {
      categories.push(category);
    }
    return categories;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  ///Approach 1
  const categoriesArr = ["Any", "Misc", "Programming", "Dark", "Pun", "Spooky", "Christmas"];
  let select = document.getElementById("categories");

  for (let category of categoriesArr) {
    let opt = document.createElement("option");
    opt.innerHTML = category;
    select.appendChild(opt);
  }

  ///Approach 2
  try {
    const c = await getCategories();
    let select = document.getElementById("categories");

    for (let category of c) {
      let opt = document.createElement("option");
      opt.innerHTML = category;
      select.appendChild(opt);
    }
  } catch (error) {
    console.log(error);
  }
})();



document.getElementById("category-joke").addEventListener("click", async () => {
  let selectedCategory = document.getElementById("categories").value;
  const data = await fetch(`https://v2.jokeapi.dev/joke/${selectedCategory}?safe-mode`);
  const parsedData = await data.json();
  console.log(parsedData);

  let parts = parsedData.type;
  if (parts == "twopart") {
    document.getElementById("joke-from-category").innerHTML = `${parsedData.setup} <br> ${parsedData.delivery}`;
  } else {
    document.getElementById("joke-from-category").innerHTML = parsedData.joke;
  }
});









