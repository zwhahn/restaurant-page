export const homePage = function() {
    const content = document.getElementById("content");
    content.textContent = ''; // Erase all child nodes

    const welcomePoster = document.createElement("h1");
    welcomePoster.innerHTML = "Welcome to Aster Cafe";
    welcomePoster.id = "welcome-poster";
    content.appendChild(welcomePoster);

    const about = document.createElement("div");
    about.innerHTML = `We are a cozy neighborhood cafe where community and flavor come together. 
        By day, we’re your go-to spot for rich, freshly brewed coffee, homemade pastries, and hearty brunch favorites 
        crafted with love. As the sun sets, our wood-fired oven takes center stage, serving up authentic Neapolitan pizza 
        with a perfectly blistered crust, paired with a curated selection of local craft beers.`
    about.className = "about";
    content.appendChild(about);

    const about2 = document.createElement("div");
    about2.innerHTML = `Family-owned and operated, we take pride in sourcing fresh, local ingredients to bring you dishes that feel like home. 
            Whether you’re here for your morning pick-me-up or an evening out with friends, Aster Cafe is a place where every 
            visit feels like catching up with an old friend.`
    about2.className = "about";
    content.appendChild(about2);
}