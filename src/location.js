export const locationPage = function() {
    const content = document.getElementById("content");
    content.textContent = ''; // Erase all child nodes

    const welcomePoster = document.createElement("h1");
    welcomePoster.innerHTML = "Location";
    welcomePoster.id = "welcome-poster";
    content.appendChild(welcomePoster);

    const about = document.createElement("div");
    about.innerHTML = `Aster Cafe <br>  
        128 Oakstone Lane <br>
        Brindlewood, Evermere 48210  <br>
        Telvaris`
    about.className = "about";
    content.appendChild(about);
}