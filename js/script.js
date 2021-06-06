

$(document).ready(()=>{
	var loc = window.location.hash.replace("#","");
	$(".nvbtn").each((i,e)=>{
		$(e).on("click",()=>{goto(e)});
	});
	if(loc){
		var elem;
		$(".nvbtn").each((i,e)=>{
			if($(e).attr("to") == loc){
				elem = e;
				return;
			}
		})
		goto(elem,loc)
	}
	listrepos();
})
function goto(elem,div = null){
	if(div == null){
	var totag = $(elem).attr("to");
	document.getElementById(totag).scrollIntoView();
	$(".selected").removeClass("selected").addClass("unselected");
	$(elem).addClass("selected").removeClass("unselected");
	}else if(div != null && elem != null){
		document.getElementById(div).scrollIntoView();
		$(".selected").removeClass("selected").addClass("unselected");
		$(elem).addClass("selected").removeClass("unselected");
	}
	else if(elem == null){
		document.getElementById(div).scrollIntoView();
		var cssselector = ".nvbtn[to='"+div+"']";
		$(".selected").removeClass("selected").addClass("unselected");
		$(cssselector).addClass("selected").removeClass("unselected");
	}
}

function listrepos(user="unknown989"){
	var api_url_call = "https://api.github.com/users/"+user+"/repos"
	 fetch(api_url_call).then((r)=>{
	 	return r.text().then((text)=>{parserepos(text)});
	 })
}
function parserepos(text){
	text = JSON.parse(text);
	var projsdiv = document.getElementById("projs-main")
	var projslist = document.getElementById("projs-list")
	text.forEach((item,index)=>{
		if(item.language !== null){

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
		projcardlang.innerHTML = "Language :"+item.language;
		projcardurlbtn.innerHTML = "Go";
		// Setting attributes
		projcard.setAttribute("id","proj-card");
		projcardname.setAttribute("id","proj-card-name");
		projcarddesc.setAttribute("id","proj-card-desc");
		projcardlang.setAttribute("id","proj-card-lang");
		projcardurl.setAttribute("href",item.html_url);
		projcardurl.setAttribute("target","_blank");
		projcardurlbtn.setAttribute("class","btn-normal");
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
		})
}
