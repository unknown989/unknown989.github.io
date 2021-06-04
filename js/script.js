

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
	 	return r.text().then((text)=>{document.getElementById("pp").innerHTML = text;});
	 })
}