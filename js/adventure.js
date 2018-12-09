
var container = document.getElementById('game-container');
var title = document.getElementById('title');
var description = document.getElementById('description');
var buttons = document.getElementById('game-buttons');
var image = document.getElementById("inventoryItem");
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById("button3");
var buttons = document.getElementById('game-buttons');
var katrol = false;

	button1.setAttribute("onclick", "start()"); 
	button1.innerHTML = "start"
	button2.setAttribute(none)



function start(){ 
	title.innerHTML = "rennen mafkees";
	image.src = "img/begin.png"
	description.innerHTML = "";
	button1.setAttribute("onclick", "level1()"); 
	button1.innerHTML = "links"
	button2.setAttribute("onclick", "gameover()"); 
	button2.innerHTML = "rechtdoor" 
	button3.setAttribute("onclick", "gameover()"); 
	button3.innerHTML = "rechts" 
	button4.style.display = "none"
}

function gameover(){ 
	title.innerHTML = "je bent dood hahahaha"; 
	image.src = "img/dood.jpg" 
	description.innerHTML = "begin maar lekker opnieuw downie";
	button1.setAttribute("onclick", "start()"); 
	button1.innerHTML = "begin maar weer van voor af aan" 
	button2.setAttribute("onclick", "start()"); 
	button2.innerHTML = "begin maar weer van voor af aan" 
	button3.setAttribute("onclick", "start()"); 
	button3.innerHTML = "begin maar weer van voor af aan" 
	button4.style.display = "none"
}


function level1(){ 
	title.innerHTML = "welke kand ga je op"; 
	image.src = "img/l.jpg" 
	description.innerHTML = "";
	button1.setAttribute("onclick", "level2()"); 
	button1.innerHTML = "links" 
	button2.setAttribute("onclick", "gameover()"); 
	button2.innerHTML = "rechtdoor" 
	button3.setAttribute("onclick", "gameover()"); 
	button3.innerHTML = "rechts" 
}

function level2(){ 
	title.innerHTML = ""; 
	image.src = "img/steen.jpg" 
	description.innerHTML = "";
	button1.setAttribute("onclick", "gameover()"); 
	button1.innerHTML = "rechtdoor" 
	button2.setAttribute("onclick", "level3()"); 
	button2.innerHTML = "springen" 
	button3.setAttribute("onclick", "gameover()"); 
	button3.innerHTML = "bukken" 
}

function level3(){ 
	title.innerHTML = ""; 
	image.src = "img/lofR.png" 
	description.innerHTML = "";
	button1.setAttribute("onclick", "level5()"); 
	button1.innerHTML = "links" 
	button2.setAttribute("onclick", "gameover()"); 
	button2.innerHTML = "rechtdoor" 
	button3.setAttribute("onclick", "level4()"); 
	button3.innerHTML = "rechts" 
}

function level4(){ 
	title.innerHTML = "heb je de katrol"; 
	image.src = "img/extra.jpg" 
	description.innerHTML = "";
	if (katrol = true) {
		button1.setAttribute("onclick", "level8()"); 
		button1.innerHTML = "glijden" 
		} else {
			button1.setAttribute("onclick", "gameover")
			button1.innerHTML = "je hebt een katrol nodig"
		}
	button2.setAttribute("onclick", "gameover()");
	button2.innerHTML = "door rennen" 
	button3.setAttribute("onclick", "gameover()"); 
	button3.innerHTML = "springen" 
}

function win(){ 
	title.innerHTML = "je hebt gewonnen jeeej"; 
	image.src = "win.jpg" 
	description.innerHTML = "";
	button1.setAttribute("onclick", "start()"); 
	button1.innerHTML = "opniew beginnen" 
	button2.setAttribute("onclick", "start()");
	button2.innerHTML = "opniew beginnen" 
	button3.setAttribute("onclick", "start()");
	button3.innerHTML = "opniew beginnen" 
	button4.style.display = "none"
}
	

function level5(){ 
	title.innerHTML = ""; 
	image.src = "img/waaterval.jpg" 
	description.innerHTML = "hey er ligt iets in het water...";
	button1.setAttribute("onclick", "level6()"); 
	button1.innerHTML = "springen" 
	button2.setAttribute("onclick", "level7()"); 
	button2.innerHTML = "duiken" 
	button3.setAttribute("onclick", "gameover()"); 
	button3.innerHTML = "door rennen" 
}

function level6(){ 
	title.innerHTML = "je komt deze op kant niet ver"; 
	image.src = "img/kar.jpg" 
	description.innerHTML = "o hey zo ga je trug";
	button1.setAttribute("onclick", "gameover()"); 
	button1.innerHTML = "door rennen" 
	button2.setAttribute("onclick", "start()"); 
	button2.innerHTML = "springen" 
	button3.setAttribute("onclick", "start()"); 
	button3.innerHTML = "aan de rechter kant door rennen" 
}

function level7(){ 
	title.innerHTML = "je vind een katrol"; 
	image.src = "img/onderwater.jpg" 
	description.innerHTML = "";
	katrol = true
	button1.setAttribute("onclick", "level3()"); 
	button1.innerHTML = "pak de katrol op en ga terug" 
	button2.setAttribute("onclick", "start()"); 
	button2.innerHTML = "begin maar weer van voor af aan" 
	button3.setAttribute("onclick", "level3()"); 
	button3.innerHTML = "ga terug" 
}

function level8(){ 
	title.innerHTML = "rennen je bent er bijna!!"; 
	image.src = "img/r.jpg" 
	description.innerHTML = "welke kant ga je op";
	button1.setAttribute("onclick", "win()"); 
	button1.innerHTML = "rechts" 
	button2.setAttribute("onclick", "gameover()"); 
	button2.innerHTML = "rechtdoor" 
	button3.setAttribute("onclick", "start()"); 
	button3.innerHTML = "springen en kijken waar je komt" 
	var button4 = document.createElement("button");
    buttons.appendChild(button4)
    button4.id = "button4"
    button4.setAttribute("onclick", "gameover()")
    button4.innerHTML = "links"
}