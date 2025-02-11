export const menuPage = function() {
    const content = document.getElementById("content");
    content.textContent = ''; // Erase all child nodes

    const welcomePoster = document.createElement("h1");
    welcomePoster.innerHTML = "Menu";
    welcomePoster.id = "welcome-poster";
    content.appendChild(welcomePoster);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const menuList = document.createElement("ul");
    menuList.classList.add("menu");
    const menuItems = ["Pizza", "Burger", "Pasta", "Sandwich"];
    const fragment = document.createDocumentFragment(); // Create a fragment

    menuItems.forEach(itemText => {
        const menuItem = document.createElement("li");
        menuItem.textContent = itemText;
        fragment.appendChild(menuItem); // Add to fragment (NOT the page yet)
    });

    menuList.appendChild(fragment); // Add everything at once
    menuContainer.appendChild(menuList);
    document.getElementById("content").appendChild(menuContainer);

}