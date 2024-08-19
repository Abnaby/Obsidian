lis = document.querySelectorAll("li");
mainContainer = document.querySelector(".experiment");

// Change Color on select
lis.forEach((li) => {
  li.addEventListener("click", (clickedLi) => {
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Get Color
    color = clickedLi.currentTarget.dataset.color;
    mainContainer.style.backgroundColor = color;
    console.log(color);
  });
});
