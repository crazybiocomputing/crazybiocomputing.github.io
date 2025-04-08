<?php
	include('../../phpCrazy/header_help.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
#crazybiolab {
  position: absolute;
}

#answer {
  position: absolute;
  left:20px;
  top: 30px;
  width:360px;
  font-family: 'Rock Salt',cursive;
  font-size: 16px;
}

#question {
  color: #ffffff;
  position: absolute;
  left:50px;
  top: 400px;
  width:400px;
  z-index: 1;
}

.askButton {
  text-decoration:none;
  text-shadow: none;
  background-color: #FF8040;
  border: 1px solid #FF8010;
  border-radius: 5px;
  margin: 2px 2px 4px 2px;
  padding: 4px 4px 4px 4px;
  font-style: normal;
  font-weight: normal;
  font-family: 'Walter Turncoat', cursive;
  color: rgb(40,40,40);
}

.askKButton:hover {
  color: rgb(0,0,0);
}
</style>

<script type="text/javascript">
var status=0;

function room(name) {
  console.log(status + ' '+ (status & 128));
  if (name=='map')
    document.getElementById("crazybiolab").innerHTML='<img src="crazybiolab.png" usemap="#lab"></img>';
  else if (name=='machine')
    document.getElementById("crazybiolab").innerHTML='<img src="coffee.png" usemap="#coffee"></img> <p>The coffee machine is out of order</p><p><a href="javascript:room(\'map\')">Back to map</a></p>';
  else if (name=='sofa')
    document.getElementById("crazybiolab").innerHTML='<img src="coffee.png" usemap="#coffee"></img> <p>Hmm... I have to work!!</p><p><a href="javascript:room(\'map\')">Back to map</a></p>';
  else if (name=='stairs')
    document.getElementById("crazybiolab").innerHTML='<p>Bye Bye!!</p>';
  else if (name=='coffee') {
    if ((status & 1) == 1 && (status & 2) == 2) {
      document.getElementById("crazybiolab").innerHTML='<img src="coffee2.png" usemap="#coffee2"></img><p>The coffee machine ... and <a href="javascript:room(\'student\')">a student</a>.</p> <p><a href="javascript:room(\'map\')">Back to map</a></p>';
    }
    else
      document.getElementById("crazybiolab").innerHTML='<img src="coffee.png" usemap="#coffee"></img> <p><a href="javascript:room(\'map\')">Back to map</a></p>';
  }
  else if (name=='student') {
      document.getElementById("crazybiolab").innerHTML='<img src="student.png"></img><div id="answer"></div><div id="question"></div>';
      updatestudentQA(0);
  }
  else if (name=='biology2') 
    document.getElementById("crazybiolab").innerHTML='<p>Nobody is in this room</p>';
  else if (name=='biology1') {
    updatebioQA(0);
  }
  else if (name=='computer') {
    document.getElementById("crazybiolab").innerHTML='<p style="font-family:\'Rock Salt\',cursive">I\'ll be back soon</p><p>The door is locked...<a href="javascript:room(\'map\')">Back to map</a></p>';
    status|=2;
  }
//  else
//  document.getElementById("crazybiolab").innerHTML='<img src="crazybiolab.png" usemap="#lab"></img>';


}
var _index = 0;
var _single=false;
var _arr = 'undefined';
var _display = 'undefined';

function pageUpDown(incrt) {
  _index+=incrt;
  if (_index < 0) 
    _index=0;
  else if (_index > _arr.length -1) 
    _index--;
  textDisplay(_display,_arr,_index);
}

function textDisplay(display,arr,index) {
  if (index==0) {
    _index = index;
    _arr = arr;
    _display = display;
    if (arr.length==1) _single=true;
  }
  if (_single)
    display.innerHTML='';
  else
    display.innerHTML='<a title="Previous" style="text-decoration:none" href="javascript:pageUpDown(-1)">&larr;&nbsp;</a>';
  textAnimate(display,arr[index]);

}

function textAnimate(display,txt) {
    for(var i = 0, l = txt.length; i < l; i++) {
      (function(i) {
        setTimeout(function() {
          if (txt.charAt(i)=='\n')
            display.innerHTML += '<br>';
          else
            display.innerHTML += txt.charAt(i);
          if (!_single && i == txt.length - 1)
            display.innerHTML+='<a title="Next" style="text-decoration:none" href="javascript:pageUpDown(1)">&nbsp;&rarr;</a>';

        }, i * 50);
      }(i));
    }
}

function studentQ() {
  var str = '<p>Coffee machine is out of order</p>';
  if ( (status & 32)==32) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="4"> Hmm... I have no crazyCoin. Could you give me one, please?</input><br>';
    str+='<input type="radio" name="Q" value="8">I got the key but I need a login and password ...</input><br>';
    str+='<input type="radio" name="Q" value="7">For my bioinformatics project, I need access to a computer ...</input><br>';
    str+='<input type="radio" name="Q" value="3">Who are you?</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
    str+='<p>Oopps! I\'m in the wrong place...<a href="javascript:room(\'map\')">Back to map</a></p>';
  }
  else if ( (status & 16)==16) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="3"> Who are you?</input><br>';
    str+='<input type="radio" name="Q" value="4" checked> Hmm... I have no crazyCoin. Could you give me one, please?</input><br>';
    str+='<input type="radio" name="Q" value="5">The computer room is locked ...</input><br>';
    str+='<input type="radio" name="Q" value="7">For my bioinformatics project, I need access to a computer ...</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
    str+='<p>Oopps! I\'m in the wrong place...<a href="javascript:room(\'map\')">Back to map</a></p>';
  }
  else if ( (status & 8)==8) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="3"> Who are you?</input><br>';
    str+='<input type="radio" name="Q" value="4" checked> Hmm... I have no crazyCoin. Could you give me one, please?</input><br>';
    str+='<input type="radio" name="Q" value="7">For my bioinformatics project, I need access to a computer ...</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
    str+='<p>Oopps! I\'m in the wrong place...<a href="javascript:room(\'map\')">Back to map</a></p>';
  }
  else if ( (status & 4)==4) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="3"> Who are you?</input><br>';
    str+='<input type="radio" name="Q" value="4" checked> Hmm... I have no crazyCoin. Could you give me one, please?</input><br>';
    str+='<input type="radio" name="Q" value="6">I have a bioinformatics project...</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
    str+='<p>Oopps! I\'m in the wrong place...<a href="javascript:room(\'map\')">Back to map</a></p>';
  }
  else if ( (status & 2)==2 && (status & 1)==1) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="1"> Where is the coffee machine?</input><br>';
    str+='<input type="radio" name="Q" value="2"> Is the coffee machine fixed?</input><br>';
    str+='<input type="radio" name="Q" value="3"> Who are you?</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
    str+='<p>Oopps! I\'m in the wrong place...<a href="javascript:room(\'map\')">Back to map</a></p>';
  }

  return str;
}

var student=[
'Hi! my name is Phil',
'Here, you are in the right place to drink a coffee ...',
'The coffee machine is now working but the coffee isn\'t really tasty ...',
'I\'m a pHD student working in the CrazyBioLab.\nI work on multiple alignment algorithms ...',
'Sorry, I used my last coin....',
'In bioinformatics, we are using many different packages for this kind of work. I suggest to do some searches on Internet...\n'+
'In Wikipedia, keywords like \'bioinformatics\' and \'package\' can be helpful...',
'Computers are available in the computer room...',
'It\'s easy to remember the login & password of the computers.\n The login corresponds to the package installed on the computer...\n'+
 '... and the password to the length of the URL + consonants number + vowels number...\n'+
 'For example, if \'google\' is installed. Its french URL is "www.google.fr",then login is \'google\' and password \'1383\' corresponding to 13 characters, 8 consonants and 3 vowels'
'To unlock the door, type the name of a package beginning with 'E\'...'
];


function studentA(value) {
  var str=[];
  switch (parseInt(value)) {
    case 1:
      str.push('Here, you are in the right place to drink a coffee ...');
      break;
    case 2:
      str.push('The coffee machine is now working but the coffee isn\'t really tasty ...');
      break;
    case 3:
      str.push('I\'m a pHD student working in the CrazyBioLab.\nI work on multiple alignment algorithms ...');
      break;
    case 4:
      str.push('Sorry, I used my last coin....');
      break;
    case 5:
      str.push('Usually, "Geek" gave the key to Kate. Ask her');
      break;
    case 6:
      str.push('In bioinformatics, we are using many different packages for this kind of work. I suggest to do some searches on Internet...');
      str.push('In Wikipedia, keywords like \'bioinformatics\' and \'package\' can be helpful...');
      break;
    case 7:
      str.push('Computers are available in the computer room...');
      break;
    case 8:
      str.push( );
      str.push('... and the password to the length of the URL + consonants number + vowels number...');
      str.push('For example, if \'google\' is installed. Its french URL is "www.google.fr",then login is \'google\' and password \'1383\' corresponding to 13 characters, 8 consonants and 3 vowels');
      break;
    default:
      str.push('Hi! My name is Phil...');
  }
  return str;
}

function updatestudentQA(value) {
    document.getElementById("crazybiolab").innerHTML='<img src="student.png"></img><div id="answer"></div><div id="question"></div>';
    var answer = document.getElementById('answer');
    textDisplay(answer,studentA(value),0);
    
    document.getElementById("question").innerHTML=studentQ();
}

function parseStudentAnswer() {
  var a = 0;  
  for (var i=0;i<document.forms['student'].elements.length;i++) {
    if (document.forms['student'].elements[i].checked==true)
      a=document.forms['student'].elements[i].value;
  }
  updatestudentQA(a);
}

function bioA(value) {
  var str=[];
  switch (parseInt(value)) {
    case 1:
      str.push( 'I\'m biologist in the CrazyBioLab.\nI work on genomics and proteomics...');
      break;
    case 2:
      str.push('The coffee machine is just in front of the stairs...');
      break;
    case 3:
      str.push('I can\'t help you. Go and see \'Amadeus\' our artist of the computer room...');
      status|=1;
      break;
    case 5:
      str.push('Sure, \'Amadeus\' gave me the door code of the computer room just before going to lunch. Here it is...[She gives you the key]');
      status|=32;
      break;
    default: {
      str.push('Hi! My name is Kate...');
    }
  }
  console.log(str);
  return str;
}

function bioQ() {
  var str = '';
  if ( (status & 128)!=128) {
    str+='<form name="bio">';
    str+='<input type="radio" name="bioQ" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="bioQ" value="1"> Who are you?<br>';
    str+='<input type="radio" name="bioQ" value="2"> Where is the coffee machine?<br>';
    str+='<input type="radio" name="bioQ" value="3">I have a bioinformatics project...<br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseBioAnswer();">Ask</a>';
  }
  str+='<p><a href="javascript:room(\'map\')">Back to map</a></p>';

  return str;
}

function updatebioQA(value) {
    document.getElementById("crazybiolab").innerHTML='<img src="labRoom.png"></img><div id="answer"></div><div id="question"></div>';
    var answer = document.getElementById('answer');
    textDisplay(answer,bioA(value),0);
    
    document.getElementById("question").innerHTML=bioQ();
}

function parseBioAnswer() {
  var a = 0;  
  for (var i=0;i<document.forms['bio'].elements.length;i++) {
    if (document.forms['bio'].elements[i].checked==true)
      a=document.forms['bio'].elements[i].value;
  }
  console.log('answer '+a);
  updatebioQA(a);
}

</script>

<div id="page">
<div id="content">
  <div id="crazybiolab"><img src="crazybiolab.png" usemap="#lab"></img></div>
  <div id="msg"></div>
</div>
</div>

<MAP NAME="lab">
<AREA shape="rect" coords="0,210,127,353" HREF="javascript:room('stairs')" ALT="stairs" />
<AREA shape="rect" coords="0,0,240,155" HREF="javascript:room('coffee')" ALT="coffee">
<AREA shape="rect" coords="245,0,485,155" HREF="javascript:room('biology1')" ALT="biology1">
<AREA shape="rect" coords="128,210,331,353" HREF="javascript:room('biology2')" ALT="biology2">
<AREA shape="rect" coords="332,210,541,353" HREF="javascript:room('computer')" ALT="computer">
<AREA shape="rect" coords="486,0,599,155" HREF="javascript:room('office1')" ALT="office1">
<AREA shape="rect" coords="600,0,700,155" HREF="javascript:room('office2')" ALT="office2">
<AREA shape="rect" coords="542,210,700,353" HREF="javascript:room('boss')" ALT="boss">
<AREA SHAPE=default HREF="javascript:tryagain()">
</MAP>

<MAP NAME="coffee">
<AREA shape="POLY" coords="107,298,132,287,132,253,224,224,237,246,250,241,301,257,302,287,157,347,107,327" HREF="javascript:room('sofa')" ALT="sofa" />
<AREA shape="POLY" coords="403,124,450,110,500,120,504,294,466,312,403,291" HREF="javascript:room('machine')" ALT="machine" />
<AREA SHAPE=default HREF="javascript:tryagain()">
</MAP>

<MAP NAME="coffee2">
<AREA shape="POLY" coords="107,298,132,287,132,253,224,224,237,246,250,241,301,257,302,287,157,347,107,327" HREF="javascript:room('sofa_student')" ALT="sofa" />
<AREA shape="POLY" coords="403,124,450,110,500,120,504,294,466,312,403,291" HREF="javascript:room('machine_closeview')" ALT="machine" />
<AREA shape="POLY" coords="293,516,289,465,242,448,264,341,313,308,315,235,355,214,386,234,368,314,394,328,404,511" HREF="javascript:room('student')" ALT="student" />
<AREA SHAPE=default HREF="javascript:tryagain()">
</MAP>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
