<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>


<style type="text/css">

.chat {
  float:left;
  width:700px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Coda', sans-serif;
  font-size:16px;
}
.chat p {
  padding: 0px;
  margin: 0px;
}

.the_button {
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: 'Coda', sans-serif;
  font-size: 16px;
  color: #666;
}

.seq {
  font-family:monospace;
  font-size:20px;
  line-height:40px;
}

.row {
  margin:0px;
  padding:0px;
}

.tag {
  font-family:sans-serif;
  font-size:16px;
  font-weight:bold;
  background-color:#000;
  color:#fff;
  width:30px;
  height:30px;
  border-radius:50%;
  padding:4px;
  text-align:center;
  margin:auto;
}

.shifti {
  width:40px;
  line-height:20px;
  border: 0px solid;
  background-color: transparent;
}

#read0,#read1,#read2,#read3,#read4 {
 font-size:28px;
 text-decoration: none;
}
</style>

<script type="text/javascript">
var MAX=60;
var sequences=[
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="read0" href="javascript:void(0)" onclick="reverse(0)">&rarr;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="read1" href="javascript:void(0)" onclick="reverse(1)">&rarr;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="read2" href="javascript:void(0)" onclick="reverse(2)">&rarr;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="read3" href="javascript:void(0)" onclick="reverse(3)">&rarr;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
  '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a id="read4" href="javascript:void(0)" onclick="reverse(4)">&rarr;</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
];

var leading_spaces =[0,0,0,0,0,0];
var values=[0,0,0,0,0];

var dialog={
'boy00': '<br></br>Sorry...Your coffee is cold, because your assembly in the previous game was very loooonnnnng...<br></br>',
'boy01': '<p>However, in EMBOSS, there is a tool to join two overlapping nucleic acid sequences into one merged sequence',
'boy02': '<p>...  <input id="answer" type="text" size="10" value="EMBOSS tool?"></input> can do the job...<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a></p>',
'boy03': '<p>Great!!! Just to see how it works, rebuild the assembly with <b>merger</b> from the complementary and forward reads by successively joining ((((1 and 5), and 3), and 2), and 4)...</p><p> The scientists have found two really interesting protein regions located at 967-978 and 1867-1875... </p>',

};

var index_boy = 0;
var index_girl = 0;

function doIt() {
  document.getElementById('chat_boy').innerHTML=dialog['boy'+index_girl+index_boy];
}

function draw() {
  for (var k=0;k<sequences.length;k++) {
    var lead_spaces='';
    for (var j=0;j<leading_spaces[k];j++) {
      lead_spaces+='&nbsp;';
    }
    document.getElementById('seq'+k).innerHTML='<div class="row">'+lead_spaces+'<span style="background-color:#bdf"><input class="shifti" id="shift'+k+'" type="text" size=4 value="'+values[k]+'" onchange="left_right('+k+')"></input>'+sequences[k]+'</span>&#8213;<span class="tag">&nbsp;'+(k+1)+'&nbsp;</span></div>';
  }
}


function left_right(v) {
  values[v]=document.getElementById('shift'+v).value;
  leading_spaces[v]=Math.floor(document.getElementById('shift'+v).value/25.0);
  if (leading_spaces[v] < 0) leading_spaces[v]=0;
  draw();
}

function reverse(v) {
  if (  document.getElementById('read'+v).innerHTML == "\u2190") {
    document.getElementById('read'+v).innerHTML='&rarr;';
  }
  else {
    document.getElementById('read'+v).innerHTML='&larr;';
  }
}

function updateDialog(people) {
  var old_boy = index_boy;
  var old_girl= index_girl;
  if (people === 'boy') {
    old=index_boy;
    index_boy++;
    index_boy = (index_boy % 3);
  }

  console.log('before '+index_girl +' '+index_boy);
  if (dialog[people+index_girl+index_boy] !== undefined) {
    document.getElementById('chat_'+people).innerHTML=dialog[people+index_girl+index_boy];
  }
  else {
    index_boy  = old_boy;
    index_girl = old_girl;
  }

  console.log(index_girl +' '+index_boy);
}

function go_ahead() {
  var good = 0;
  if (document.getElementById('answer').value === "merger") { 
    document.getElementById('chat_boy').innerHTML=dialog['boy03'];
  }
}

</script>



<div id="page">
<div id="content">

<div class="chat" id="chat_boy">
</div>
<img src="../img/../img/student_coffee.png" width="190px" onclick="updateDialog('boy')"></img>

<br></br>



</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
