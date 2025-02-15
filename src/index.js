import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";
import { locationPage } from "./location.js";

// Show home page when first loaded
homePage();

// Define nav buttons
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => homePage());

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => menuPage());

const aboutBtn = document.getElementById("about-btn");
aboutBtn.addEventListener("click", () => aboutPage());

const locationBtn = document.getElementById("location-btn");
locationBtn.addEventListener("click", () => locationPage());