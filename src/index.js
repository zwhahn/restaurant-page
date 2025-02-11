import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";

// Show home page when first loaded
homePage();

// Define nav buttons
const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", () => homePage());

const menuBtn = document.getElementById("menu-btn");
menuBtn.addEventListener("click", () => menuPage());

const aboutBtn = document.getElementById("about-btn");

const locationBtn = document.getElementById("location-btn");
