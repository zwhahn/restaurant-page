import "./styles.css";
import { homePage } from "./home.js";


// Define nav buttons
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
const locationBtn = document.getElementById("location-btn");

homeBtn.addEventListener("click", () => homePage());