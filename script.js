function toggleTheme() {
    const themeButton = document.getElementById("button-luna"); 
    const body = document.body;
    const title = document.querySelector("h1");
    const notes = document.querySelectorAll(".marker label"); 
    const searchInput = document.querySelector(".search input"); 

    themeButton.addEventListener("click", function() {
        body.classList.toggle("dark");
        title.classList.toggle("white-text");
        notes.forEach(note => {
            note.classList.toggle("white-text");
        });

        searchInput.classList.toggle("white-text");
        searchInput.classList.toggle("search-dark");
    });
}

toggleTheme();
