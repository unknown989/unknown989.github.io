<<<<<<< HEAD
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
=======
function goto(e,t=null){var n;null==t?(n=$(e).attr("to"),document.getElementById(n).scrollIntoView(),$(".selected").removeClass("selected").addClass("unselected"),$(e).addClass("selected").removeClass("unselected")):null!=t&&null!=e?(document.getElementById(t).scrollIntoView(),$(".selected").removeClass("selected").addClass("unselected"),$(e).addClass("selected").removeClass("unselected")):null==e&&(document.getElementById(t).scrollIntoView(),t=".nvbtn[to='"+t+"']",$(".selected").removeClass("selected").addClass("unselected"),$(t).addClass("selected").removeClass("unselected"))}function listrepos(e="unknown989"){fetch("https://api.github.com/users/"+e+"/repos").then(e=>e.text().then(e=>{parserepos(e)}))}function parserepos(e){e=JSON.parse(e);var c=document.getElementById("projs-main"),u=document.getElementById("projs-list");e.forEach((e,t)=>{var n,l,d,s,a,r,o;null!==e.language&&(n=document.createElement("div"),l=document.createElement("h2"),d=document.createElement("div"),s=document.createElement("p"),a=document.createElement("p"),r=document.createElement("a"),o=document.createElement("button"),l.innerHTML=e.full_name,s.innerHTML=e.description,a.innerHTML="Language :"+e.language,o.innerHTML="Go",n.setAttribute("id","proj-card"),l.setAttribute("id","proj-card-name"),d.setAttribute("id","proj-card-desc"),a.setAttribute("id","proj-card-lang"),r.setAttribute("href",e.html_url),r.setAttribute("target","_blank"),o.setAttribute("class","btn-normal"),n.appendChild(l),d.appendChild(s),n.appendChild(d),n.appendChild(a),r.appendChild(o),n.appendChild(r),u.appendChild(n),c.appendChild(u))})}$(document).ready(()=>{var n,l=window.location.hash.replace("#","");$(".nvbtn").each((e,t)=>{$(t).on("click",()=>{goto(t)})}),l&&($(".nvbtn").each((e,t)=>{$(t).attr("to")==l&&(n=t)}),goto(n,l)),listrepos()});
>>>>>>> 8d71824ac66bd00dee3c0aa08951a512826dc019