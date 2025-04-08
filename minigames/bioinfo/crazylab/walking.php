<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Architects+Daughter' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<link href='../crazybioflow/crazybioflow.css' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="readmail.css">

<style>

#crazybiolab {
  margin-left: auto;
  margin-right: auto;
  position:absolute;
}

#toolbar {
  padding: 0px 0px 4px 4px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
#toolbar a {
  margin-left: 16px;
}


#answer {
  position: absolute;
  left:20px;
  top: 90px;
  width:360px;
  font-family: 'Rock Salt',cursive;
  font-size: 16px;
}

#question {
  color: #ffffff;
  position: absolute;
  left:50px;
  top: 350px;
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

.askButton:hover {
  color: rgb(0,0,0);
}

table
{
  width: 80%;  /* Largeur dynamique */
  text-align: center; /* On centre le contenu */
  margin: auto;  /* On centre le tableau */
  /* border-collapse: collapse; On commente border-collapse pour ne plus l'utiliser */
  border-collapse: separate;
  border-spacing: 0px;
}


#password table tr {
  font-family:'Arial',serif;
  font-size:60px;
  text-align:center;
  line-height:45px;
}

#password table td {
  width:30px;
  color: black;
  text-decoration: none;
  background-color: #fff;
  border-radius:0px;
  border:0px 5px 0px 5px;
}

#keyboard table a {
  text-decoration:none;
  color: #eee;
  background-color: #369;
}

#keyboard table a:hover {
  color: #fff;
}


#keyboard tr {
  font-family:'Arial',serif;
  font-size:40px;
  text-align:center;
  width:100px;
  line-height:80px;
}

#keyboard td {
/**  display: block; **/
  color: #000000;
  text-decoration: none;
  background-clip: padding-box; /* this has been added */
  border-radius: 30px;
  background-color: #369;
  border: 5px solid white;
}

sub {
  font-size:15px;
}

.clipzone a {
  margin: 0px;
  padding: 0px
  border: 0px;
}

.clipzone 
{
  position:relative;
  float: left;
  width:91px; 
  height:91px;
  overflow:hidden;
}

.clipped
{
  position:absolute;
}

</style>
<script type="text/javascript" src="../crazybioflow/jsScroller.js"></script>
<script type="text/javascript" src="../crazybioflow/jsScrollbar.js"></script>
<script type="text/javascript" src="chapter1.js"></script>
<script type="text/javascript" src="readmail.js"></script>
<script type="text/javascript">

function doIt() {
  // Do nothing
}

function initlab() {
  var div=document.getElementById('crazybiolab');
  div.innerHTML='<img src="map.png" usemap="#lab"></img>';
}

</script>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;1&nbsp;:&nbsp;C&nbsp;o&nbsp;m&nbsp;p&nbsp;u&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;r&nbsp;o&nbsp;o&nbsp;m</p>
  <div id="toolbar">
<div id="system_tools" style="float:left" >
<a href="javascript:void(0)" onClick="readmail();"><img title="Mail" src="../img/mail.svg"></img></a>
<a href="javascript:void(0)" onClick="initlab();"><img title="Visit the CrazybioLab!!" src="../img/walk.png"></img></a>
</div>
<div id="tools">
<a href="javascript:void(0)" onClick="useTool();"><img  title="Space #1" src="first.png"></img></a>
<a href="javascript:void(0)" onClick="useTool();"><img  title="Space #2" src="first.png"></img></a>
<a href="javascript:void(0)" onClick="useTool();"><img  title="Space #3" src="first.png"></img></a>
<a href="javascript:void(0)" onClick="useTool();"><img  title="Space #4" src="first.png"></img></a>
<a href="javascript:void(0)" onClick="useTool();"><img  title="Space #5" src="first.png"></img></a>
</div>
</div>

  <div id="crazybiolab"></div>
  <div id="msg"></div>
</div>
</div>

<MAP NAME="lab">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="rect" coords="0,210,127,353" HREF="javascript:room('stairs')" ALT="stairs" />
<AREA shape="rect" coords="0,0,240,155" HREF="javascript:room('coffee')" ALT="coffee">
<AREA shape="rect" coords="245,0,485,155" HREF="javascript:room('biology1')" ALT="biology1">
<AREA shape="rect" coords="128,210,331,353" HREF="javascript:room('biology2')" ALT="biology2">
<AREA shape="rect" coords="332,210,541,353" HREF="javascript:room('computer')" ALT="computer">
<AREA shape="rect" coords="486,0,599,155" HREF="javascript:alert('An office. The room is empty')" ALT="office1">
<AREA shape="rect" coords="600,0,700,155" HREF="javascript:alert('The door is locked')" ALT="office2">
<AREA shape="rect" coords="542,210,700,353" HREF="javascript:alert('Boss\'s office')" ALT="boss">
</MAP>


<MAP NAME="biologist">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
</MAP>

<MAP NAME="bio1">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="POLY" coords="326,216,336,183,288,135,317,114,340,134,346,95,359,93,353,43,394,44,400,95,421,114,420,174,404,199" HREF="javascript:room('biologist')" ALT="biologist" />
</MAP>

<MAP NAME="bio2">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
</MAP>

<MAP NAME="box_empty">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
</MAP>

<MAP NAME="box">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="POLY" coords="228,218,338,182,425,272,304,322" HREF="javascript:room('screwdriver')" ALT="screwdriver" />
</MAP>

<MAP NAME="coffee">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="POLY" coords="41,334,34,275,170,229,178,238,235,259,235,308,100,361" HREF="javascript:alert('Hmm... I have to work!!')" ALT="sofa" />
<AREA shape="POLY" coords="427,115,419,299,482,319,520,300,530,116,467,103" HREF="javascript:alert('The coffee machine is out of order')" ALT="machine" />
<AREA shape="RECT" coords="120,360,240,420" HREF="javascript:room('table')" ALT="table" />
</MAP>

<MAP NAME="coffee2">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="POLY" coords="41,334,34,275,170,229,178,238,235,259,235,308,100,361" HREF="javascript:alert('Could be fine if I had a coffee')" ALT="sofa"  />
<AREA shape="POLY" coords="427,115,419,299,482,319,520,300,530,116,467,103" HREF="javascript:room('coffee_zoom')" ALT="machine" />
<AREA shape="RECT" coords="120,360,240,420" HREF="javascript:room('table')" ALT="table" />
<AREA shape="RECT" coords="306,106,360,273" HREF="javascript:room('coffee_zoom')" ALT="student" />
</MAP>

<MAP NAME="coffee_zoom">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="POLY" coords="93,447,115,425,81,204,96,158,113,153,105,102,146,97,158,152,190,168,203,230,188,282,193,448" HREF="javascript:room('man')" ALT="man" />
<AREA shape="POLY" coords="217,53,375,49,407,60,404,411,376,463,226,442" HREF="javascript:room('machine')" ALT="machine" />
<AREA shape="RECT" coords="613,103,689,150" HREF="javascript:alert('contains scientific magazines')" ALT="box" />
<AREA shape="RECT" coords="619,262,682,303" HREF="javascript:alert('empty box')" ALT="box" />
<AREA shape="RECT" coords="520,376,581,426" HREF="javascript:room('box')" ALT="box" />
<AREA shape="RECT" coords="522,167,579,224" HREF="javascript:alert('archive boxes')" ALT="box" />
</MAP>

<MAP NAME="table">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="RECT" coords="467,344,596,383" HREF="javascript:room('coin')" ALT="coin" />
</MAP>

<MAP NAME="computer">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="RECT" coords="225,100,470,265" HREF="javascript:room('computer_zoom')" ALT="computer_zoom" />
</MAP>

<MAP NAME="computer_zoom">
<AREA shape="POLY" coords="0,0,115,0,0,115" HREF="javascript:room('map')" ALT="map" />
<AREA shape="RECT" coords="220,58,500,167" HREF="javascript:room('door')" ALT="title" />
<AREA shape="RECT" coords="567,265,673,400" HREF="javascript:room('digicode')" ALT="digicode" />
<AREA shape="RECT" coords="532,434,641,460" HREF="javascript:alert('The door is locked')" ALT="handle" />
</MAP>


<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
