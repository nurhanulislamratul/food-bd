
document.addEventListener("DOMContentLoaded", () => {
    const seeMoreButton = document.getElementById("seeMoreButton");
    const seeLessButton = document.getElementById("seeLessButton");
    const hiddenItems = document.querySelectorAll(".singleCollection.hidden");
  
    seeMoreButton.addEventListener("click", () => {
      hiddenItems.forEach(item => {
        item.classList.remove("hidden");
      });
      seeMoreButton.classList.add("hidden");
      seeLessButton.classList.remove("hidden");
    });
  
    seeLessButton.addEventListener("click", () => {
      hiddenItems.forEach(item => {
        item.classList.add("hidden");
      });
      seeMoreButton.classList.remove("hidden");
      seeLessButton.classList.add("hidden");
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("subscribeForm");
    const successMessage = document.getElementById("successMessage");
    const errorMessage = document.getElementById("errorMessage");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const emailInput = document.getElementById("emailInput").value;
  
      if (!emailInput) {
        errorMessage.classList.remove("hidden");
        successMessage.classList.add("hidden");
      } else {
        successMessage.classList.remove("hidden");
        errorMessage.classList.add("hidden");
      }
    });
  
    form.addEventListener("input", () => {
      const emailInput = document.getElementById("emailInput").value;
  
      if (emailInput) {
        errorMessage.classList.add("hidden");
      }
    });
  });