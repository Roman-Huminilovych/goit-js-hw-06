const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
for (let i = 0; i < ingredients.length; i += 1) {
  const itemLi = document.createElement("li");
  itemLi.textContent = ingredients[i];
  itemLi.classList.add("item");
  list.append(itemLi);
}

console.log(list);
