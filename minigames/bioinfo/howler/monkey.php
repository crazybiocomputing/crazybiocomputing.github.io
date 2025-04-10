<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>

#bubble {
  position:absolute;
  left:0px;
  top:0px;
  background-color:white;
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin: 0px;
}

#bubble p {
  margin:0px;
  padding: 0px;
  font-size: 14px;
}

#chat {
  float:left;
  width:700px;
  border: 2px solid;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Coda', sans-serif;
  font-size:16px;
}
#chat p {
  padding: 0px;
  margin: 0px;
}


.block label { 
  display: inline-block; 
  font-size:30px;
  width: 40px; 
  text-align: right; 
  top-margin: 5px;
}​


</style>

<script type="text/javascript" src="steps.js"></script>

<div id="page">
<div id="content">

<div id="chat">
<p> All the species you have studied are Old World primates, now add the <b>venezuelan red howler</b> to see if the genes have evolved similarly in the old and new worlds... </p>
<p>Download the opsin nucleotide sequence of the venezuelan red howler from our <i>Hominoidae</i> databank. Then, run a new phylogeny...</p><br>
<p>From the cladogram, you can conclude that...</p>
</div>
<img src="biologist_closeview.png" width="150px"></img>

<br><br>
<div id="result" style="float:left">
<p>... the opsin evolution of New World and Old World monkeys, is <input id="item0" rows="6" size="4" value="identical or different"></input>.</p>
<p>In New World monkeys, the opsin gene evolution corresponds to a 
<input id="item1" rows="6" size="8" value="duplication or divergence"></input> followed by a 
<input id="item2" rows="6" size="8" value="duplication or divergence"></input>.</p>
<p><input type="button" value="Submit" onclick="javascript:checkLast()"></input></p>
<br>
</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
