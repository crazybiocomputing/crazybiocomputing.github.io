var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {

}


function room(event,v) {
  console.log(event);
  var ev = event || window.event;

  switch (v) {
  case 1: 
        myAlert(ev,'Here is the Reference Tree... well, well that doesn\'t seem so complicated <br><br><br><img src="tree.png"></src>',emptybubble);
    break;
  case 2: 
    myAlert(ev,'Here is the Tree #2...<br><br><br><img src="tree_b.png"></src>',emptybubble);
    break;
  case 3: 
    myAlert(ev,'Need a pen? What can I do with this... "ancient technology, old chap" said Mortimer to his partner  ...',emptybubble);    break;
  case 4: 
    myAlert(ev,'Here is the Tree #4...<br><br><br><img src="tree_d.png"></src>',emptybubble);    break;
  case 5: 
    if (joker) {
      var form = '<p>\"Where is the common ancestor ?...\"</p><form name="joker_form" method="post">';
      form    += '<label>Node:</label><input name="node" type="text" size="6"></input>';
      form    += '<input type="button" style="float:right;" value="OK" onclick="runForm2()"></input></form><br>';
      myAlert(ev,form,emptybubble);
    }
    else
          myAlert(ev,'Here is the Tree #3...<br><br><br><img src="tree_c.png"></src>',emptybubble);

    break;
  case 6: 
    myAlert(ev,'Here is the Tree #1...<br><br><br><img src="tree_a.png"></src>',emptybubble);
    break;
  case 7: 
    myAlert(ev,'A coffee? why not? My brain must be 100% efficient...',emptybubble);
    break;
  case 8: 
      var form = '<form name="joker_form" method="post">';
      form    += 'Wait, wait, I found the solution...<br>The tree #';
      form    += '<select id="sel0">';
      form    += '<option value="0">?</option>';
      form    += '<option value="1">1</option>';
      form    += '<option value="2">2</option>';
      form    += '<option value="3">3</option>';
      form    += '<option value="4">4</option>';
      form    += '</select> is wrong ... I... I have the explanation... <br> ';
      form    += '<select id="sel1">';
      form    += '<option value="X">Species</option>';
      form    += '<option value="E">E.coli</option>';
      form    += '<option value="F">Fern</option>';
      form    += '<option value="G">Giardia</option>';
      form    += '<option value="A">Green algae</option>';
      form    += '<option value="H">Human</option>';
      form    += '<option value="L">Lily</option>';
      form    += '<option value="P">Pine</option>';
      form    += '<option value="Y">Yeast</option>';
      form    += '</select> is more closely related to ';
      form    += '<select id="sel2">';
      form    += '<option value="X">Species</option>';
      form    += '<option value="E">E.coli</option>';
      form    += '<option value="F">Fern</option>';
      form    += '<option value="G">Giardia</option>';
      form    += '<option value="A">Green algae</option>';
      form    += '<option value="H">Human</option>';
      form    += '<option value="L">Lily</option>';
      form    += '<option value="P">Pine</option>';
      form    += '<option value="Y">Yeast</option>';
      form    += '</select> in the reference';
      form    += ' than to ';
      form    += '<select id="sel3">';
      form    += '<option value="X">Species</option>';
      form    += '<option value="E">E.coli</option>';
      form    += '<option value="F">Fern</option>';
      form    += '<option value="G">Giardia</option>';
      form    += '<option value="A">Green algae</option>';
      form    += '<option value="H">Human</option>';
      form    += '<option value="L">Lily</option>';
      form    += '<option value="P">Pine</option>';
      form    += '<option value="Y">Yeast</option>';
      form    += '</select> in the wrong tree.<br>';
      form    += '<input type="button" style="float:right;" value="OK" onclick="runForm()"></input></form><br>';
      myAlert(ev,form,emptybubble);
    break;
  case 9: myAlert(ev,'Oopps!',emptybubble);break;
  }

}

function runForm() {
  var dummyEvent = {'clientX':0, 'clientY':0};
  var x = document.getElementById('background').offsetLeft;
  var y = document.getElementById('background').offsetTop;
  var answer='';
  for (var i=0; i<4;i++) {
    var e = document.getElementById("sel"+i);
    answer += e.options[e.selectedIndex].value;
  }

  if (answer === '4PLY' || answer === '4HYL' || answer === '4LPY' || answer === '4YHL') {
    document.getElementById('chat').innerHTML='<p>Congratulations!!<br>Click <a href="batman.php">Here</a> to go to the next mini-game';
  }
  else {
    document.getElementById('chat').innerHTML='Oh Nooo!!, one (or several answers) are wrong... ';
  }

}


function myAlert(ev,text,guy) {
  ev = ev || window.event;
  console.log('myAlert '+text+' '+ev.clientX+' '+ev.clientY);
  var bubble = document.getElementById('bubble');
  bubble.innerHTML='<p>'+text+'</p>';
  bubble.style.left= (ev.clientX + guy['x']) + 'px';
  bubble.style.top = (ev.clientY + guy['y']) + 'px';
}
