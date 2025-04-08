var sample=0;
var joker=false;
var emptybubble={'x':0,'y':0};

function doIt() {
var coords=[128,73,176,200,156,207,121,125,162,251,111,251,109,367,65,364,67,253,18,250,53,124,19,207,0,202,49,73];
  var answ='';
  for (var i=0; i< coords.length;i+=2)
    answ+=(coords[i]+426)+','+(coords[i+1]+70)+',';
  console.log(answ);
  if (sessionStorage.getItem('dialog_answer') != null) {
    document.getElementById('truth').value = sessionStorage.getItem('dialog_answer');
  }
}


var arr=[
'<span class="tag">#100</span><b>First</b>, I can tell you...<br>...Opsins are a group of light-sensitive membrane-bound G protein-coupled receptors...',
'<span class="tag">#730</span>There are many different opsins. For example, bacteriorhodopsins are type-2 opsins...',
'<span class="tag">#202</span>Hmm... I don\'t remember exactly but ...<br>encephalopsins are involved in the process of human vision',
'<span class="tag">#321</span>I can\'t believe that, you are so stupid!!!<br> ... Opsin proteins are covalently bound to vitamin C',
'<span class="tag">#112</span>You\'re wrong... Opsins are bound to a retinaldehyde chromophore',
'<span class="tag">#295</span>You know rhodopsins belonging to the vertebrate opsins are involved in the day vision ...',
'<span class="tag">#222</span> ...and they (rhodopsins) are responsible for color vision.',
'<span class="tag">#666</span>I need a coffee ...That\'s true...',
'<span class="tag">#678</span>Photopsins are located in cone cells...I suppose...Actually, I don\'t remember well.',
'<span class="tag">#313</span>Cone cells are one of the two types of photoreceptor cells that are in the retina of the eye',
'<span class="tag">#294</span>A latte with a soft foam ... Hmmmm',
'<span class="tag">#811</span>In PROSITE databank, they said that the retinal binding site of the opsins is a Cys (C).',
'<span class="tag">#470</span>A capuccino for me.',
'<span class="tag">#308</span>Opsin 3D structures are well known. Opsins contain nine transmembrane alpha-helical domains',
'<span class="tag">#107</span>Long Wavelength Sensitive Opsin have their λmax in the red region of the electromagnetic spectrum!! YES!!!',
'<span class="tag">#863</span>Humans are trichromats... but not Gorillas...',
'<span class="tag">#504</span>... and they (humans) have 3 types of receptors having peak wavelengths near 564–580 nm, 534–545 nm, and 420–440 nm, respectively.',
'<span class="tag">#827</span>I don\'t understand anything ...',
'<span class="tag">#900</span>Ohh my ...',
'<span class="tag">#404</span>No more comments. End of the story. (...)',
];

var count=0;
var last=0;

function dialog(event,v) {
  console.log(event);
  var ev = event || window.event;
  if (count >= arr.length)
    count=0;

  switch (v) {
  case 1: 
    if (last == 1) 
      myAlert(ev,arr[count-1],emptybubble);
    else {
      myAlert(ev,arr[count++],emptybubble);
      last=1;
    }
    break;
  case 2: 
    if (last==2) 
      myAlert(ev,arr[count-1],emptybubble);
    else {
      myAlert(ev,arr[count++],emptybubble);
      last=2;
    }
    break;
  case 3: 
    myAlert(ev,'Oohhh!!! I have headache...',emptybubble);
    break;
  case 4: 
    if (last==4) 
      myAlert(ev,arr[count-1],emptybubble);
    else {
      myAlert(ev,arr[count++],emptybubble);
      last=4;
    }
    break;
  case 5: 
    if (last==5) 
      myAlert(ev,arr[count-1],emptybubble);
    else {
      myAlert(ev,arr[count++],emptybubble);
      last=5;
    }
    break;
  case 6: 
    if (last==6) 
      myAlert(ev,arr[count-1],emptybubble);
    else {
      myAlert(ev,arr[count++],emptybubble);
      last=6;
    }
    break;
  case 9: myAlert(ev,'Oopps!',emptybubble);break;
  }

}

var result="#100,#107,#112,#313,#504,#678";

function runForm() {

  var arr = document.getElementById('truth').value.split(/([#0-9]*)/);
  console.log(arr);
  var correct=0;
  var wrong=0;
  var storage='';
  for (var i=0;i<arr.length;i++) {
    if (arr[i][0] == "#") {
      storage +=arr[i]+' ';
      var regexp = new RegExp(arr[i],"g");
      if (regexp.test(result) == true) {
        correct++;
      }
      else {
        wrong++;
      }
      console.log(arr[i] + ' ' + regexp.test(result) );
    }
  }

  var answer = arr.sort().join();
  answer = answer.substring(answer.indexOf("#"),answer.length);
  sessionStorage.setItem('dialog_answer',storage);
  console.log(answer);
  if (answer === result) {
    document.getElementById('chat').innerHTML='<p><span style="font-size: 20px">Correct: '+correct+'/6 - Excellent!!! </span></p>'+
        '<p>Congratulations!!<br>Click <a href="james_bond.php">Here</a> to go to the next mini-game';
  }
  else if (correct == 0) {
    document.getElementById('chat').innerHTML='<p><span style="font-size: 20px">Correct: '+correct+' Wrong: '+wrong+'</span></p>'+
        '<p>Oh Nooo!!, all the statements you have chosen are wrong... Don\'t click everywhere. Study the statements one by one and check their veracity...</p><p>Reload the web page and try again ';
  }
  else {
    document.getElementById('chat').innerHTML='<p><span style="font-size: 20px">Correct: '+correct+' Wrong: '+wrong+'</span></p>'+
        '<p>Good but not perfect!!, You found some of the true statements but not all...Reload the web page and try again ';
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
