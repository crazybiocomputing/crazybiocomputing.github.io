<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>


label {
  display:inline-block;
  width: 200px;

}

.the_button {
  text-decoration: none;
  padding: 0px 5px 2px;
  border: 1px solid #DDD;
  border-radius: 3px;
  background-clip: padding-box;
  background-color: #EEE;
  font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;
  font-size: 13px;
  color: #666;
}

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
</style>

<script type="text/javascript">
var dialog={
'girl00': '<br></br>...<br></br>',
'girl10': '<p><a class="the_button" href="http://i.ytimg.com/vi/8n8yg9C6QKA/maxresdefault.jpg">A student...</a> was bitten by an animal during a practical session '+
         'triggering pain crisis and huge fever. He was sent to the hospital '+
         'and the doctors think that an immune process is responsible of the crisis '+
         'and they want to know the name of the animal before beginning a traitment...</p>'+
         '<p>Thus, various transcriptomics analysis were done and <b>ten sequences were obtained</b>...</p>',
'girl21':'<p>The purpose of this project is to assemble the mRNA...and there is two main approaches '+
         'to compute the assembly: <b>From scratch</b> or <b>From a template. </b>The latter is what we plan to do...</p>',
'girl31':'<p>...Thus, you have to sort the various sequences according '+
         'to their origin and get a template corresponding to the animal for the assembly. </p>',
'girl42': '<form><label>Organism Name:</label><input id="org" type="text"><br></br>'+
          '<label>Sequences (Ex: #1 #7 #8):</label><input id="seqs" type="text"></form>',
'boy00': '<br></br>...<br></br>',
'boy11': '<p><br></br>The sequences are <a class="the_button" href="sequences.html" target="_blank">there</a>...<br></br></p>',
'boy32': '<br></br>Go ahead!!<br></br>',
'boy43': '<br></br>I have to check if your answers are good... <a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'boy66': '<br></br>Too bad!! The organism is wrong... <br></br>Modify your answers and ...<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'boy77': '<br></br>Oh nooo!! The organism is good but the sequences are not correct ... <br></br>Modify your answers and ...'+
         '<a class="the_button" href="javascript:void(0)" onclick="go_ahead()">Click</a><br></br>',
'boy99': 'Great!!! Rename your sequences as follows...<ul><li>Read#1 = sequ002</li><li>Read#2 = sequ005</li><li>Read#3 = sequ007</li>'+
         '<li>Read#4 = sequ008</li><li>Read#5 = sequ010</li></ul>'+
         '<p>You can access to chapter#2 ... the secret word is the protein name followed by <i>.php</i></p><br></br>'
}

var index_boy = 0;
var index_girl = 0;

function doIt() {
  document.getElementById('chat_girl').innerHTML=dialog['girl'+index_girl+index_boy];
  document.getElementById('chat_boy').innerHTML=dialog['boy'+index_girl+index_boy];
}

function updateDialog(people) {
  var old_boy = index_boy;
  var old_girl= index_girl;
  if (people === 'boy') {
    index_boy++;
    index_boy = (index_boy % 4);
  }
  else {
    old=index_girl;
    index_girl++;
    index_girl = (index_girl % 5);
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
  if (document.getElementById('org').value.trim().toLowerCase() === 'tarantula' && document.getElementById('seqs').value.trim().length > 1) {
    var values = document.getElementById('seqs').value.trim().toLowerCase().split(' ');
    console.log(values);
    if (values[0]==='#2'&& values[1]==='#5' && values[2]==='#7' && values[3]==='#8' && values[4]==='#10') {
      document.getElementById('chat_boy').innerHTML=dialog['boy99'];
    } 
  }
  else if (document.getElementById('org').value.trim().toLowerCase() === 'tarantula') {
    document.getElementById('chat_boy').innerHTML=dialog['boy77'];
  } 
  else {
    document.getElementById('chat_boy').innerHTML=dialog['boy66']; 
  }
}

</script>

<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<?php

if (isset($_POST['OK']) ) {
  if ($_POST['os']=='tarentula') {
    echo '<p style="font-size : 40px;">- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="next_one.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p style="font-size : 40px;">- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;


}

?>
</div>

<div class="chat" id="chat_girl"></div>
<img src="../img/biologist_closeview.png" width="140px" onclick="updateDialog('girl')"></img>

<br></br>
<img src="../img/student_face_left.png" width="190px" onclick="updateDialog('boy')"></img>

<div class="chat" id="chat_boy" style="float:right"></div>





</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
