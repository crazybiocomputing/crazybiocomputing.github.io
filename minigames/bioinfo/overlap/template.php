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
'girl00': '<br></br>...<br></br>',
'girl10': '<p>In the previous chapter, you were able to find a template in order to assemble your five reads.'+
          ' Now, we need more information about the various overlaps between the reads.'+
          ' From the results of the alignment bioinformatics tool, fill in the graphics tool, below.</p>'+
          '<p> For each read, you have to determine its location (expressed in bp) in the mRNA template and '+
          'the direction (forward or complementary) by clicking on the arrow...</p>',
'girl20':'<br></br>I have to check if your answers are good... <a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'girl30': '<br></br>Too bad!! Your locations and directions are wrong... <br></br>Modify your answers and ...'+
          '<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'girl40': '<br></br><p><b>Great!!</b> In conclusion, we have overlaps between (read#1; read#5), (read#5; read#3), (read#3; read#2), and (read#2; read#4)</p>'+
          '<p>Ohh!! I forgot, the secret word is <b>pancake.php</b><br></br>',
'girl50': '<br></br>Ohhh Noooo!!! The location(s) of the reads are wrong...<br></br>Modify your answers and ...'+
          '<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'girl60': '<br></br>Ohhh Noooo!!! The directions ... I mean, the arrows ... are wrong..<br></br>Modify your answers and ...'+
          '<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>'
};

var index_boy = 0;
var index_girl = 0;

function doIt() {
  document.getElementById('chat_girl').innerHTML=dialog['girl'+index_girl+index_boy];
  draw();

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
  if (people === 'girl') {
    old=index_girl;
    index_girl++;
    index_girl = (index_girl % 3);
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

  if (document.getElementById('shift0').value >= 32 && document.getElementById('shift0').value <= 37   
  &&  document.getElementById('shift1').value >= 1111 && document.getElementById('shift0').value <= 1115 
  &&  document.getElementById('shift2').value >= 845 && document.getElementById('shift0').value <= 850
  &&  document.getElementById('shift3').value >= 1389 && document.getElementById('shift0').value <= 1393 
  &&  document.getElementById('shift4').value >= 471 && document.getElementById('shift0').value <= 475
) { 
    good +=2;
  }
  if (document.getElementById('read0').innerHTML == "\u2190" 
  &&  document.getElementById('read1').innerHTML == "\u2192" 
  &&  document.getElementById('read2').innerHTML == "\u2190" 
  &&  document.getElementById('read3').innerHTML == "\u2192" 
  &&  document.getElementById('read4').innerHTML == "\u2192"   ) {
    good +=1;  
  }

  if (good == 3) {
    document.getElementById('chat_girl').innerHTML=dialog['girl40'];
  }
  else if (good == 2) {
    document.getElementById('chat_girl').innerHTML=dialog['girl60']; 
  }
  else if (good == 1) {
    document.getElementById('chat_girl').innerHTML=dialog['girl50']; 
  }
  else {
    document.getElementById('chat_girl').innerHTML=dialog['girl30']; 
  }

}

</script>



<div id="page">
<div id="content" style="width: 1100px">

<div class="chat" id="chat_girl">
</div>
<img src="../img/biologist_closeview.png" width="140px" onclick="updateDialog('girl')"></img>

<br></br>

<div class="seq">

<div id="template">
<p style="font-family:'Courier New', Courier, monospace;line-height: normal; margin: 0px">1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;250       </p>
<p style="font-family:'Courier New', Courier, monospace;line-height: normal; margin: 0px">|--------|---------|---------|---------|---------|---------|---------|---------|-----</p>
<span style="background-color:#bdf">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;m R N A&nbsp;&nbsp;&nbsp;T e m p l a t e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div id="seq0"></div>
<div id="seq1"></div>
<div id="seq2"></div>
<div id="seq3"></div>
<div id="seq4"></div>
<div id="seq5"></div>
</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
