<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
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

<script type="text/javascript" src="game.js"></script>

<div id="page">
<div id="content">

<div id="chat">
<p> I'm really desperate... I have to simplify this tree and unfortunately George told me that one of them is wrong. That's really a shame !! I have to find it quickly because the lab meeting is in 20 minutes. I must finish the report and my talk... That's a disaster ... Which one is the wrong one ? Number 1 ? or 3? or ... I don't know... and Why? I have no clue. <br>OK, OK, calm down, breathe and go ahead. I must find it and why, in order to fix my error.</p>
</div>
<img src="biologist_closeview.png" width="150px"></img>

<center>
<img id="background" src="background.png" usemap="#desk"></img>
</center>

<div id="bubble"></div>


<MAP NAME="desk">
<AREA shape="poly" coords="51,35,285,9,309,173,68,207" href="javascript:void(0)" onclick="javascript:room(event,1)" ALT="collection" />
<AREA shape="poly" coords="383,211,448,253,423,330,296,305" href="javascript:void(0)" onclick="javascript:room(event,2)" ALT="collection" />
<AREA shape="poly" coords="423,157,438,139,580,139,599,154,597,191,425,193" href="javascript:void(0)" onclick="javascript:room(event,3)" ALT="collection" />
<AREA shape="poly" coords="389,206,468,195,522,233,476,269" href="javascript:void(0)" onclick="javascript:room(event,4)" ALT="collection" />
<AREA shape="poly" coords="475,196,559,193,615,211,553,255" href="javascript:void(0)" onclick="javascript:room(event,5)" ALT="collection" />
<AREA shape="poly" coords="618,217,698,268,611,311,529,291" href="javascript:void(0)" onclick="javascript:room(event,6)" ALT="collection" />
<AREA shape="poly" coords="335,155,399,154,384,219,345,225" href="javascript:void(0)" onclick="javascript:room(event,7)" ALT="collection" />
<AREA shape="poly" coords="45,245,296,195,343,249,47,308" href="javascript:void(0)" onclick="javascript:room(event,8)" ALT="collection" />
<AREA shape="rect" coords="0,0,714,334" href="javascript:void(0)" onclick="javascript:room(event,9)" ALT="collection" />
</MAP>
<br>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
