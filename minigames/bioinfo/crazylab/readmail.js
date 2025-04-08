
var scroller  = null;
var scrollbar = null;

function scrollbarEvent (o, type) {
	if (type == "mousedown") {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#E3E3E3";
		else o.style.backgroundColor = "#BBB";
	} else {
		if (o.className == "Scrollbar-Track") o.style.backgroundColor = "#EEE";
		else o.style.backgroundColor = "#CCC";
	}
}

function readmail() {
  var div=document.getElementById('crazybiolab');
  var text='<div id="mail">';
  text+='<div id="mail_header">';
  text+='<p><b>From:</b>boss@crazybiolab.bordeaux.fr</p><b>To:</b>student@crazybiolab.bordeaux.fr</p>';
  text+='</div><div id="mail_subject">';
  text+='<p><b>Subject:</b> URGENT!!</p>';
  text+='</div>';
  text+='<div id="mail_contents">';
  text+='<div id="mail_text">';
  text+='<div class="Scroller-Container">';
  text+='<span style="font-family:\'Rock Salt\',cursive"><p>I have many sequences to process for a bioinformatics project. Please, configure one of the computers of the CrazyBioLab and install a bioinformatics package to process our sequences in good conditions.</p>';
  text+='<p>The boss.</span></p>';
  text+='</div></div></div>';
  text+='<div id="Scrollbar-Container">';
  text+='<div class="Scrollbar-Track">';
  text+='<div class="Scrollbar-Handle"></div>';
  text+='</div>';

  div.innerHTML=text;

  scroller  = new jsScroller(document.getElementById("mail_text"), 600, 400);
  scrollbar = new jsScrollbar (document.getElementById("Scrollbar-Container"), scroller, true, scrollbarEvent);
}




