var status=0;
var tool=0;
var active_tool=0;
var password=['*','*','*','*','*','*'];
var password_index=0;

var rooms={
'biologist':'<img src="biologist.jpg"  usemap="#biologist"></img><div id="answer"></div><div id="question"></div>',
'biology1':'<img src="bio1.jpg" usemap="#bio1"></img>',
'biology2':'<img src="bio2.jpg" usemap="#bio2"></img>',
'box':'<img src="box.jpg" usemap="#box"></img>',
'coin':'<img src="table.jpg" usemap="#table"></img>',
'coffee':'<img src="coffee.jpg" usemap="#coffee"></img> <p><a href="javascript:room(\'map\')">Back to map</a></p>',
'coffee2':'<img src="coffee2.jpg" usemap="#coffee2"></img> <p><a href="javascript:room(\'map\')">Back to map</a></p>',
'coffee_zoom':'<img src="coffee_zoom.jpg" usemap="#coffee_zoom"></img> <p><a href="javascript:room(\'map\')">Back to map</a></p>',
'computer':'<img src="computer_door.jpg" usemap="#computer"><a href="javascript:room(\'map\')">Back to map</a></p>',
'computer_zoom':'<img src="computer_zoom.jpg" usemap="#computer_zoom"><a href="javascript:room(\'map\')">Back to map</a></p>',
'digicode':
  '<div id="password"><table><tr><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td><td>*</td></tr></table></div><br>'+
  '<div id="keyboard"><table><tr><td><a href="javascript:void(0)" onclick="javascript:getDigit(\'1\')">1<sub>&nbsp;</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'2\')">2<sub>ABC</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'3\')">3<sub>DEF</sub></a></td></tr>'+
  '<tr><td><a href="javascript:void(0)" onclick="javascript:getDigit(\'4\')">4<sub>GHI</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'5\')">5<sub>JKL</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'6\')">6<sub>MNO</sub></a></td></tr>'+
  '<tr><td><a href="javascript:void(0)" onclick="javascript:getDigit(\'7\')">7<sub>PQRS</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'8\')">8<sub>TUV</sub></a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'9\')">9<sub>WXYZ</sub></a></td></tr>'+
  '<tr><td><a href="javascript:void(0)" onclick="javascript:getDigit(\'0\')">0</a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'C\')">CE</a></td>'+
  '<td><a href="javascript:void(0)" onclick="javascript:getDigit(\'R\')">&crarr;</a></td></tr></table></div>',
'door':'<img src="computer_zoom.jpg" usemap="#computer_zoom"></img>',
'door_code':'<img src="computer_code.jpg" usemap="#computer_zoom"></img>',
'final':'<p style="font-size:40px">Congratulations!!!</p><p style="font-size:40px">End of Chapter 1.</p><p style="font-size:40px">Click on <a href="362677.php">this link</a> to go to the next chapter</p>',
'man':'<img src="coffee_zoom.jpg" usemap="#coffee_zoom"></img>',
'map':'<img src="map.png" usemap="#lab"></img>',
'machine':'<img src="coffee_zoom.jpg" usemap="#coffee_zoom"></img>',
'sofa':'<img src="coffee.png" usemap="#coffee"></img> <p>Hmm... I have to work!!</p><p><a href="javascript:room(\'map\')">Back to map</a></p>',
'stairs':'<p>You quit the building and forgot your pass. You can\'t get in.</p><p>End of the game</p>',
'screwdriver':'<img src="box.jpg" usemap="#box"></img>',
'screwdriver_no':'<img src="box_empty.jpg" usemap="#box_empty"></img>',
'student':'<img src="student.png"></img><div id="answer"></div><div id="question"></div>',
'table':'<img src="table.jpg"  usemap="#table"></img>',
'table_no':'<img src="table_empty.jpg"  usemap="#table"></img>'
}


function room(name) {
  console.log(status + ' '+ (status & 128)+' '+tool+" "+active_tool);
  document.getElementById("crazybiolab").innerHTML=rooms[name];

  if (name=='coffee') {
    if ((status & 1) == 1 && (status & 2) == 2) {
      room('coffee2');
    }
  }
  else if (name=='biologist') {
    updatebioQA(0);
  }
  else if (name=='box' && (tool & 2) == 2 ) {
    console.log('empty box');
    room('screwdriver_no');
  }
  else if (name=='computer') {
    status|=2;
  }
  else if (name=='computer_zoom') {
    status|=2;
  }
  else if (name=='coin') {
    tool|=4;
    room('table_no');
  }
  else if (name=='machine') {
    if (active_tool==4) {
      tool|=8;
      tool &=(1|2|8);
      alert('Bzzzzz ... Your coffee is ready');
    }
    else
      alert('A coffee costs one CrazyCoin. I have no coin :-(');
  }
  else if (name=='door') {
    if (active_tool==2) {
      room('door_code');
    }
    else
      alert('Here is the computer room');

  }
  else if (name=='man') {
    if (active_tool==2) {
      alert('What can I do with that?');
    }
    else if (active_tool==8) {
      room('student');
    }
    else
      alert('Hmm... I\'m tired... Need a coffee but I\'ve lost my last coin around');
  }
  else if (name=='screwdriver') {
    console.log('full box');
    tool|=2;
    room('screwdriver_no');
  }
  else if (name=='student') {
    updatestudentQA(0);
  }
  else if (name=='table' && (tool & 4) == 4 ) {
    console.log('empty box');
    room('table_no');
  }

  //  Update tools
  tools();

}

function tools() {
  var str='';
  for (var i=0;i<5;i++) {
    var tmp = '<a href="javascript:void(0)" onClick="useTool();"><img title="Space #'+(i+1)+'" src="first.png"></img></a>';
    if ( (tool & 2) == (i+1)*2)
      if (active_tool == 2)
        tmp='<a href="javascript:void(0)" onClick="useTool(0);"><img title="Space #1" src="screw_driver_checked.png"></img></a>';
      else
        tmp='<a href="javascript:void(0)" onClick="useTool(2);"><img title="Space #1" src="screw_driver.png"></img></a>';

    if ( (tool & 4) == (i+1)*2)
      if (active_tool == 4)
        tmp='<a href="javascript:void(0)" onClick="useTool(0);"><img title="Space #2" src="coin_checked.png"></img></a>';
      else
        tmp='<a href="javascript:void(0)" onClick="useTool(4);"><img title="Space #2" src="coin.png"></img></a>';

    if ( (tool & 8) == Math.pow(2,(i+1)) )
      if (active_tool == 8)
        tmp='<a href="javascript:void(0)" onClick="useTool(0);"><img title="Space #3" src="black_coffee_checked.png"></img></a>';
      else
        tmp='<a href="javascript:void(0)" onClick="useTool(8);"><img title="Space #3" src="black_coffee.png"></img></a>';

    str+=tmp;
  }

  document.getElementById("tools").innerHTML=str;
}

function useTool(index) {
  active_tool=index;
  tools();
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
  lineDisplay(_display,_arr,_index);
}

function textDisplay(display,text) {
  var sentences = text.split('\n');
  _index=0;
  _single=false;

  console.log('text:'+sentences.length);
  lineDisplay(display,sentences,0);
}


function lineDisplay(display,arr,index) {
  if (index==0) {
    _index = index;
    _arr = arr;
    _display = display;
    if (arr.length==1) _single=true;
  }
  console.log('single line '+_single);
  if (_single || index ==0)
    display.innerHTML='';
  else
    display.innerHTML='<a title="Previous" style="text-decoration:none;text-shadow:none; font-family:\'Arial\';font-size:14px; color:#00f;" href="javascript:pageUpDown(-1)">&lt;&lt;&lt;Prev</a><br>';
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
            display.innerHTML+='<br><a style="text-decoration:none;text-shadow:none; font-family:\'Arial\';font-size:14px; color:#00f;" title="Next" href="javascript:pageUpDown(1)"> Next&gt;&gt;&gt;</a>';

        }, i * 50);
      }(i));
    }
}

var student={
  'Q':[
    'Hi! Hello! Bonjour!',
    'Where is the coffee machine?',
    'Is the coffee machine fixed?',
    'Who are you?',
    'Hmm... I have no crazyCoin. Could you give me one, please?',
    'The computer room is locked ...and I need a code',
    'I have a bioinformatics project...',
    'For my bioinformatics project, I need an access to a computer ...',
    'I got the key but I need a login and password ...'
  ],
  'A':[
    'Thank you for the coffee!!! My name is Phil...',
    'Here, you are in the right place to drink a coffee ...',
    'The coffee machine is now working but the coffee isn\'t really tasty ...',
    'I\'m a pHD student working in the CrazyBioLab.\nI work on multiple alignment algorithms ...',
    'Sorry, I used my last coin....',
    'Usually, Greg gives clues to find out the code.',
    'In bioinformatics, we are using many different packages for sequencing, searching, etc.. I suggest to do some searches on Internet...\nIn Wikipedia, keywords like \'bioinformatics\' and \'package\' can be helpful...',
    'Computers are available in the computer room...',
    'Only six digits...and if I remember the package begins with a \'E\''
  ],
  'forms':[
    {status:2,items:[0,1,2,3]},
    {status:4,items:[0,3,4,6]},
    {status:8,items:[0,3,4,7]},
    {status:16,items:[0,4,8,7,3]},
    {status:32,items:[0,3,4,5,7]}
  ]
}
 
  



function studentQ() {
  var str = '';
  if ( (status & 8)==8) {
    str+='<p>I have no further questions</p>';
  }
  else if ( (status & 2)==2 && (status & 1)==1) {
    str ='<form name="student">';
    str+='<input type="radio" name="Q" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="Q" value="3">Who are you?</input><br>';
    str+='<input type="radio" name="Q" value="6">I have a bioinformatics project...</input><br>';
    str+='<input type="radio" name="Q" value="7">I need an access to a computer ...</input><br>';
    str+='<input type="radio" name="Q" value="8">Do you know the door code? ...</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseStudentAnswer();">Ask</a>';
  }

  return str;
}

function studentA(value) {
  var str='';
  switch (parseInt(value)) {
    case 1:
      str='Here, you are in the right place to drink a coffee ...';
      break;
    case 2:
      str='The coffee machine is now working but the coffee isn\'t really tasty ...';
      break;
    case 3:
      str='I\'m a pHD student working in the CrazyBioLab.\nI work on multiple alignment algorithms ...';
      break;
    case 4:
      str='Sorry, I used my last coin....';
      break;
    case 5:
      str='Usually, Greg gave the key to Kate. Ask her';
      break;
    case 6:
      str='In bioinformatics, we are using many different open source packages for this kind of work like sequencing, searching, etc..\nI suggest to do some searches on Internet to get a list of these packages...\n';
      str+='In Wikipedia, keywords like \'bioinformatics\', \'open-source\' and \'package\' can be helpful...';
      status|=4;
      break;
    case 7:
      str='All the computers are available in the computer room...';
      break;
    case 8:
      str= 'No I don\'t. \nThe boss changes the password every week.\nBut he always hides a clue somewhere in the door ...';
      status |=8;
      break;
    default:
      if ((status & 8) ==8)
        str='This coffee is really tasty';
      else
        str='Thank you for the coffee!!! My name is Greg...';
  }
  return str;
}

function updatestudentQA(value) {
    document.getElementById("crazybiolab").innerHTML='<img src="student.png"></img><div id="answer"></div><div id="question"></div>';
    var answer = document.getElementById('answer');
    textDisplay(answer,studentA(value));
    
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
  var str='';
  switch (parseInt(value)) {
    case 1:
      str= 'I\'m biologist in the CrazyBioLab.\nI work on genomics and proteomics...';
      break;
    case 2:
      str='The coffee machine is just in front of the stairs...';
      break;
    case 3:
      str='I can\'t help you. Go and see Greg in the computer room...';
      status|=1;
      break;
    case 10:
    case 11:
    case 13:
      str='Ooohhh!!, that\'s wrong... ';
      break;
    case 12:
      str='Great!!! \nHmmm....About your question concerning the new door code...\nAs I remember, the boss told me that this week, all the passwords begin with a \'E\'';
      status|=8;
      break;
    default: {
      if ( (status & 4)==4 )
        str='Please, answer the question, below ...';
      else
        str='Hi! My name is Kate...';
    }
  }
  console.log(str);
  return str;
}

function bioQ() {
  var str = '';
  if ( (status & 4)==4) {
    str ='<form name="bio"><p>Which one is an open-source package?</p>';
    str+='<input type="radio" name="Q" value="10">BioPlanet</input><br>';
    str+='<input type="radio" name="Q" value="11">GeneSearch</input><br>';
    str+='<input type="radio" name="Q" value="12">Galaxy</input><br>';
    str+='<input type="radio" name="Q" value="13">ProtPython</input><br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseBioAnswer();">Ask</a>';
 }
 else if ( (status & 128)!=128) {
    str+='<form name="bio">';
    str+='<input type="radio" name="bioQ" value="0" checked> Hi! Hello! Bonjour!</input><br>';
    str+='<input type="radio" name="bioQ" value="1"> Who are you?<br>';
    str+='<input type="radio" name="bioQ" value="2"> Where is the coffee machine?<br>';
    str+='<input type="radio" name="bioQ" value="3">I have a bioinformatics project...<br>';
    str+='</form>';
    str+='<a  class="askButton" href="javascript:void(0)" onclick="parseBioAnswer();">Ask</a>';
  }


  return str;
}

function updatebioQA(value) {
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

function getDigit(value) {
  if (value == 'R') {
    if (password[0]=='3' && password[1]=='6' && password[2]=='2' && password[3]=='6' && password[4]=='7' && password[5]=='7') {
      status|=16;
      room('final');
    }
    else
      alert('Wrong code');
    password[0]='*';password[1]='*';password[2]='*';password[3]='*';password[4]='*';password[5]='*';
    password_index=0;
  }
  else if (value == 'C') {
    // Reset
    password[0]='*';password[1]='*';password[2]='*';password[3]='*';password[4]='*';password[5]='*';
    password_index=0;
  }
  else
    password[password_index++]=value;

  if (password_index > 5)
    password_index = 0;

  document.getElementById('password').innerHTML='<table><tr>'+
    '<td>'+password[0]+'</td>'+
    '<td>'+password[1]+'</td>'+
    '<td>'+password[2]+'</td>'+
    '<td>'+password[3]+'</td>'+
    '<td>'+password[4]+'</td>'+
    '<td>'+password[5]+'</td>'+
    '</tr></table>';
}

