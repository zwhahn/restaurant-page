export const aboutPage = function() {
    const content = document.getElementById("content");
    content.textContent = ''; // Erase all child nodes

    const welcomePoster = document.createElement("h1");
    welcomePoster.innerHTML = "About";
    welcomePoster.id = "welcome-poster";
    content.appendChild(welcomePoster);

    const about = document.createElement("div");
    about.innerHTML = `At Aster Cafe, we believe great food starts with great ingredients, 
        which is why we proudly source our coffee beans, produce, and dairy from local farms 
        committaed to sustainable and ethical practices. Our eggs come from free-range hens at 
        Meadowbrook Farms, our seasonal vegetables are hand-picked from Willow Creek Organics, 
        and our milk is fresh from Silver Ridge Dairy. By working directly with these small, 
        family-run farms, we ensure every cup of coffee, every pastry, and every pizza is made 
        with the freshest, highest-quality ingredients while supporting our local agricultural 
        community. Eating local isn’t just about taste—it’s about connection, sustainability, 
        and giving back to the people who nourish us.`
    about.className = "about";
    content.appendChild(about);
}