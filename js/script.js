import Home from "../routes/Home.js";
import Intro from "../routes/Intro.js";
import Projects from "../routes/Projects.js";
import Github from "../routes/Github.js";
import Contact from "../routes/Contact.js";

const mvc = new MVC();
mvc.addRoute("home", "/", Home);
mvc.addRoute("intro", "/intro", Intro);
mvc.addRoute("projects", "/projects", Projects);
mvc.addRoute("github", "/github", Github);
mvc.addRoute("contact", "/contact", Contact);

window.addEventListener("historychange", (e) => {
  var currentySelected = document.getElementsByClassName("selected")[0];
  var route = mvc.getCurrentRoute();
  currentySelected.classList.remove("selected");
  currentySelected.classList.add("unselected");
  var routeElement = document.querySelector(`[to="${route.to}"]`);
  routeElement.classList.add("selected");
  routeElement.classList.remove("unselected");
});
