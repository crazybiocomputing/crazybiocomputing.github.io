var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {
  var dummyEvent = {'clientX':0, 'clientY':0};
  var x = document.getElementById('background').offsetLeft;
  var y = document.getElementById('background').offsetTop;
  myAlert(dummyEvent,'I am the boss',{'x':x+320,'y':y+20});
}


function room(event,v) {
  console.log(event);
  var ev = event || window.event;

  switch (v) {
  case 1: 
        myAlert(ev,'I found that the <b>Mouse</b> is more related to the <b>Sponge</b> than to the <b>Tomato</b>',emptybubble);
    break;
  case 2: 
    myAlert(ev,'... The <b>Tomato</b> and the <b>Fern</b> are closely related',emptybubble);
    break;
  case 3: 
    myAlert(ev,'We have 5 species: <b>Tomato</b>, <b>Fern</b>, <b>Sponge</b>, <b>Mouse</b>, and <b>Mushroom</b> ...and a partially drawn cladogram',emptybubble);
    break;
  case 4: 
    myAlert(ev,'\'d\' is the common ancestor to the <b>Mushroom</b> and to the <b>Sponge</b>',emptybubble);
    break;
  case 5: 
    if (joker) {
      var form = '<p>\"Where is the common ancestor ?...\"</p><form name="joker_form" method="post">';
      form    += '<label>Node:</label><input name="node" type="text" size="6"></input>';
      form    += '<input type="button" style="float:right;" value="OK" onclick="runForm2()"></input></form><br>';
      myAlert(ev,form,emptybubble);
    }
    else
      myAlert(ev,'Nothing.',emptybubble);
    break;
  case 6: 
    var win=window.open("http://en.wikipedia.org/wiki/Cladogram", '_blank');
    win.focus();
    break;
  case 7: myAlert(ev,'Here is the cladogram...<br><br><br><img src="tree.png"></src>',emptybubble);
    break;
  case 8:
    var n='<p>"How do I complete this form?..."</p><form name="bubble_form" method="post">';
    n+='<div class="block"><label>&tridot;</label><input name="items[]" type="text" size="6"></input></div>',
    n+='<div class="block"><label>&clubs; </label><input name="items[]" type="text" size="6"></input></div>';
    n+='<div class="block"><label>&otimes;</label><input name="items[]" type="text" size="6"></input></div>';
    n+='<div class="block"><label>&spades;</label><input name="items[]" type="text" size="6"></input></div>';
    n+='<div class="block"><label>&olcir; </label><input name="items[]" type="text" size="6"></input><br>';
    n+='<input type="button" style="float:right;" value="OK" onclick="runForm()"></input></form><br>';
    myAlert(ev,n,emptybubble);
    break;
  case 9: myAlert(ev,'I am the boss',emptybubble);break;
  }

}

function runForm() {
  var arr = document.bubble_form.elements['items[]'];
//  var values=['mushroom','mouse','fern','tomato','sponge'];
  var ans=['surmo','sormu','sumro','somru'];
  var dummyEvent = {'clientX':0, 'clientY':0};
  var x = document.getElementById('background').offsetLeft;
  var y = document.getElementById('background').offsetTop;
  var answer='';
  for (var i=0;i< arr.length;i++) {
    answer+=arr[i].value.toLowerCase().trim()[2];
  }
  console.log(answer );
  for (var i=0;i< ans.length;i++) {
    if (answer===ans[i])
      joker = true;
  }
  console.log(answer );

  if (joker) {
    myAlert(dummyEvent,'Congratulations!!<br>Now, last question:"This cladogram is unrooted. Which node (a, b, c, d, or e) is the common ancestor of the 5 species? "',{'x':x+320,'y':y+20});

  }
  else {
    myAlert(dummyEvent,'Oh Nooo!!, one (or several) answers are wrong... "',{'x':x+320,'y':y+20});
  }

}


function runForm2() {
  var dummyEvent = {'clientX':0, 'clientY':0};
  var x = document.getElementById('background').offsetLeft;
  var y = document.getElementById('background').offsetTop;

  if (document.joker_form.node.value.toLowerCase().trim() === 'b') {
    myAlert(dummyEvent,'<p style="font-size:30px"><a href="arabidopsis.php">Congratulations!!</a> You win...</p>',{'x':x+320,'y':y+20});

  }
  else {
    myAlert(dummyEvent,'Oh Nooo!!, the answer is desperitely wrong ... "',{'x':x+320,'y':y+20});
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
