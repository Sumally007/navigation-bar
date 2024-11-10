const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".dropdown-manu");

toggleBtn.addEventListener('click', () => {
    dropdown.classList.toggle('top-16');
})