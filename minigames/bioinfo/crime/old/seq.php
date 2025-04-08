<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>

input {
  font-size: 20px;
  text-align: center;
}

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

</style>
<script type="text/javascript" src="intro.js"></script>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">I&nbsp;n&nbsp;t&nbsp;r&nbsp;o&nbsp;d&nbsp;u&nbsp;c&nbsp;t&nbsp;i&nbsp;o&nbsp;n: Coffee Break</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">



<div id="popup">
<img src="background.png" usemap="#coffee">
</div>
<div id="bubble"></div>


<MAP NAME="coffee">
<AREA shape="RECT" coords="194,321,275,356" HREF="javascript:void(0)" onclick="javascript:myAlert(event,'The carpet is not a fountain of coins!!!',emptybubble)" ALT="coffee" />
<AREA shape="POLY" coords="306,236,342,252,316,264,276,247" HREF="javascript:void(0)" onclick="javascript:dialog(event,'clipboard')" ALT="coffee" />
<AREA shape="POLY" coords="291,123,292,185,328,209,320,221,302,218,294,236,261,256,256,225,195,212,256,144,266,120" HREF="javascript:void(0)" onclick="javascript:dialog(event,'girl')" ALT="coffee" />
<AREA shape="POLY" coords="474,154,476,186,516,224,519,290,388,290,388,290,438,153,457,150" HREF="javascript:void(0)" onclick="javascript:dialog(event,'boy')" ALT="coffee" />
<AREA shape="POLY" coords="516,198,608,214,630,192,654,1,533,1" HREF="javascript:void(0)" onclick="javascript:myAlert(event,'Too much coffee isn\'t good for your temper',emptybubble);" ALT="coffee" />
</MAP>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
