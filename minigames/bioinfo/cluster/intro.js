var data="<pre>\n>seq #A\nLEFELINEADERTYRPIKLMVN\n>seq #B\nSLIVEQNNQADETRYIPIKLMAN\n";
data+=">seq #C\nGEESESEEGQRTYCPIKLMLN\n>seq #D\nADERTYEPIKLMVN\n>seq #E\nVNHIERTYPIKLMVNDAQHNQDQNH\n";
data+=">seq #F\nKYRATVNHIERTYHPIKLMVN\n>seq #G\nMADAMDERTYTPIKLMVN\n>seq #H\nREDNYGGADERTYMPIKLMVN\n";
data+=">seq #I\nWEPANICADERTYLPIKLMVN\n</pre><p>Now, copy and paste these sequences in your favorite text editor and please, help me?";

var emptybubble={'x':0,'y':0};
var girl=[
'Don\'t know what to do...',
'I have 9 sequences.<br>That means I have 9x9=81 alignments to do...<br>Oohhh it\'s too long.',
'Doesn\'t seem to be very accurate in this case...',
'Yeees, that can solve my problem,<br>do you know such a tool?',
'They are working by aggregating sequence clusters...',
'You want a coffee?<br>I\'m sorry, I have no coin',
'If you think you can you solve my problem,<br>please read my clipboard...'
];
var girlbubble={'x':-150,'y':-100};

var boy=[
'Hmmmm...',
'Pairwise alignments don\'t seem to be very convenient',
'And what about BLAST?',
'We need a simultaneous alignment of all the sequences...',
'I guess, they are called \'multiple alignment\' tools',
'Hey you!<br>What are you waiting for?',
'Are you listening to us?<br> Do you have any idea about Sandy\'s problem?'
];
var boybubble={'x':-10,'y':-80};

var  statusboy=0;
var  statusgirl=0;

function dialog(ev,who) {
  console.log(statusboy +" "+ statusgirl);
  if (who=='clipboard') {
    if (statusgirl==6) {
      document.getElementById('bubble').innerHTML='';
      document.getElementById('bubble').style.left='0px';
      document.getElementById('bubble').style.top='0px';
      document.getElementById('popup').innerHTML=data;
    }
    else
      myAlert(ev,'Hmmm... It\'s not very polite to read<br> her clipboard without her permission.',emptybubble);
  }
  else if (who=='girl') {
    myAlert(ev,girl[statusgirl],girlbubble);
    if (statusboy < (statusgirl+1) )
      statusboy++;
    if (statusboy > 6)
      statusboy=6;
  }
  else if (who=='boy') {
    myAlert(ev,boy[statusboy],boybubble);
    if (statusboy > statusgirl)
      statusgirl++;
    if (statusgirl > 6)
      statusgirl=6;
  }
}


function myAlert(ev,text,guy) {
  ev = ev || window.event();
  console.log('myAlert '+text+' '+ev.clientX+' '+ev.clientY);
  var bubble = document.getElementById('bubble');
  bubble.innerHTML='<p>'+text+'</p>';
  bubble.style.left= (ev.clientX + guy['x']) + 'px';
  bubble.style.top = (ev.clientY + guy['y']) + 'px';
}

function doIt() {
  // do nothing
}


