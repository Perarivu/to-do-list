const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const list = document.getElementById("list");

addButton.addEventListener("click", function() {
  const li = document.createElement("li");
  li.innerText = newItem.value;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  
  deleteButton.addEventListener("click", function() {
    li.remove();
  });
  
  li.appendChild(deleteButton);
  list.appendChild(li);
  
  newItem.value = "";
});
