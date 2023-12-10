// Target the Elements..
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const input = document.querySelector("input");

//for search icon

searchBtn.onclick = function () {
  searchBox.classList.add("active");
  input.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  input.setAttribute("placeholder", "Type to search...");
};

//for cancel icon

cancelBtn.onclick = function () {
  searchBox.classList.remove("active");
  input.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
};
