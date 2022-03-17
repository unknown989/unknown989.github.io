export default function Projects() {
  function listrepos(user = "unknown989") {
    var api_url_call = "https://api.github.com/users/" + user + "/repos";
    fetch(api_url_call).then((r) => {
      return r.text().then((text) => {
        parserepos(text);
      });
    });
  }
  function parserepos(text) {
    text = JSON.parse(text);
    var projsdiv = document.getElementById("projs-main");
    var projslist = document.getElementById("projs-list");
    text.forEach((item, index) => {
      if (item.language !== null) {
        var projcard = document.createElement("div");
        var projcardname = document.createElement("h2");
        var projcarddesc = document.createElement("div");
        var projcarddesctext = document.createElement("p");
        var projcardlang = document.createElement("p");
        var projcardurl = document.createElement("a");
        var projcardurlbtn = document.createElement("button");
        // Non div elements
        projcardname.innerHTML = item.full_name;
        projcarddesctext.innerHTML = item.description;
        projcardlang.innerHTML = "Language :" + item.language;
        projcardurlbtn.innerHTML = "Go";
        // Setting attributes
        projcard.setAttribute("id", "proj-card");
        projcardname.setAttribute("id", "proj-card-name");
        projcarddesc.setAttribute("id", "proj-card-desc");
        projcardlang.setAttribute("id", "proj-card-lang");
        projcardurl.setAttribute("href", item.html_url);
        projcardurl.setAttribute("target", "_blank");
        projcardurlbtn.setAttribute("class", "btn-normal");
        // Appending elements
        projcard.appendChild(projcardname);
        projcarddesc.appendChild(projcarddesctext);
        projcard.appendChild(projcarddesc);
        projcard.appendChild(projcardlang);
        projcardurl.appendChild(projcardurlbtn);
        projcard.appendChild(projcardurl);
        projslist.appendChild(projcard);
        projsdiv.appendChild(projslist);
      }
    });
  }
  listrepos();

  return `<div class="page" id="projs">
	
      <div id="projs-main">
      <h1>Projects</h1><br>
      <div id="projs-list">
      </div>
      </div>
      <script>

      </script>
  </div>`;
}
