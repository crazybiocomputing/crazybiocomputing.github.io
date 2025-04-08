<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

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

<div id="samples" style="float:left"></div>
<div style="margin:auto">
<img id="background" src="background.png" width="700px" usemap="#room"></img>
</div>

<div id="bubble"></div>


<MAP NAME="room">
<AREA shape="poly" coords="570,100,632,106,652,296,520,278,532,173,564,168" href="javascript:void(0)" onclick="javascript:room(event,1)" ALT="collection" />
<AREA shape="poly" coords="445,157,485,161,494,296,351,282,353,175,386,164,392,97,449,103" href="javascript:void(0)" onclick="javascript:room(event,2)" ALT="collection" />
<AREA shape="poly" coords="318,3,320,67,381,160,348,176,342,238,242,270,202,246,212,74,263,57,264,3" href="javascript:void(0)" onclick="javascript:room(event,3)" ALT="collection" />
<AREA shape="poly" coords="214,282,72,339,57,239,86,210,46,172,129,142,143,202,175,208" href="javascript:void(0)" onclick="javascript:room(event,4)" ALT="collection" />
<AREA shape="poly" coords="373,304,430,291,469,330,402,353" href="javascript:void(0)" onclick="javascript:room(event,5)" ALT="collection" />
<AREA shape="poly" coords="349,327,407,367,341,405,277,358" href="javascript:void(0)" onclick="javascript:room(event,6)" ALT="collection" />
<AREA shape="poly" coords="479,343,561,359,479,441,397,415" href="javascript:void(0)" onclick="javascript:room(event,7)" ALT="collection" />
<AREA shape="poly" coords="220,300,280,369,183,405,128,334" href="javascript:void(0)" onclick="javascript:room(event,8)" ALT="collection" />
<AREA shape="poly" coords="272,160,294,168" href="javascript:void(0)" onclick="javascript:room(event,9)" ALT="collection" />
</MAP>
<br>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
