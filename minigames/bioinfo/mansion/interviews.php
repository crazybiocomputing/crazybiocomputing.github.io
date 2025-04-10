<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>

<style>
label {
  font-family: monospace;
  font-size:18px;
  color:#646464;";
}

input {
  font-size: 18px;
}

</style>

<script type="text/javascript">

var rooms={
'boudoir':'<p>Miss Pink reads a fashion magazine while holding a horseshoe. In her purse, you find keys, a mobile phone, a four-leaf clover, a rabbit foot and a rope.</p><p>- "I\'m superstitious and this mansion is reknown to be haunted...Lord Black is another victim of the GHOST..." She is terrified.</p><p><a href="javascript:room(\'map\')">Back to map</a></p>', 
'dinner':'<p>Nobody is in this dinner room ... and no coffee </p><p><a href="javascript:room(\'map\')">Back to map</a></p>',
'kitchen':'<p>Prof. Violet is in the kitchen holding a pair of pincers and tweezers. A book on snakes and a python living nestled in a vivarium are on the table close to a candlestick.</p><p>"These animals are really fascinating...". Hmmm... He doesn\'t seem really upset by the death of Lord Black.<p><a href="javascript:room(\'map\')">Back to map</a></p>',
'gallery':'<p><b>Colonel Yellow</b> with his leashed basset hound is admiring the trophies of Lord Black especially the whale. After discussion, he shows what he has in his pockets: keys, cell phone, hiking maps. A lead pipe was hidden in the boat...</p><p><a href="javascript:room(\'map\')">Back to map</a></p><img src="gallery.png"  usemap="#gallery"></img>',
'hall':'In the hall, you meet Dr Green with his medical kit bag made of calfskin containing among others a stethoscope, antibiotics and a wrench... "I had a flat tire this morning" he said...</p><p><a href="javascript:room(\'map\')">Back to map</a></p>',
'map':'<p>With the help of Dr. Watson, you spend the afternoon searching the various guests present the night of the murder.</p><img src="map.png" usemap="#map"></img>',
'office':'The office was cleaned up... Mrs White with her cat is looking herself in the mirror. She has in her purse, a key of her bedroom, a smartphone, a bag of kibble for her cat, and ... a dagger.</p><p><a href="javascript:room(\'map\')">Back to map</a></p><img src="office.png"  usemap="#office"></img>',
'saloon':'<p>Mrs Blue is a sophisticated old woman. You find these items: various french perfumes, a phone, and... a revolver in her purse in crocodile leather. Looking at the gun, she replied "The world is so dangerous!!!"..</p><p><a href="javascript:room(\'map\')">Back to map</a></p>',
'restroom':'<p>The restroom is the only quiet place in this mansion!!! You call the CrazyTownPoliceDpt ...</p><form action="interviews.php" method="post">'+
'<label>Who is guilty?</label><input type="text" size="10" name="people" value=""></input><br>'+
'<label>What is the evidence?</label><input type="text" size="10" name="evidence" value=""></input><br>'+
'<label>Which bioinformatic tool was used?</label><input type="text" size="10" name="tool" value=""></input><br>'+
'<input type="submit" name="OK" value="OK"></input>'+
'</form><p><a href="javascript:room(\'map\')">Back to map</a></p>'
}

function room(name) {
  document.getElementById("view").innerHTML=rooms[name];
}


</script>

<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;2: Interviews</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<center>
<?php

if (isset($_POST['OK']) ) {
  $id1=strpos(strtoupper($_POST['people']), 'PINK');
  $id2=strpos(strtoupper($_POST['evidence']), 'RABBIT');
  $id3=strpos(strtoupper($_POST['tool']), 'BLASTN');
  if ($id3===false)
    $id3=strpos(strtoupper($_POST['tool']), 'BLASTX');


  if ($id1!== false && $id2!==false && $id3!==false)   
    echo '<p><a title="Click on \'yes\'" style="text-decoration:none" href="guilty.php">Yeeess!!! This technique is called "DNA barcoding".</a></p>';
  else
    echo '<p>W r o n g &nbsp; a n s w e r</p>' ;
  unset($_POST['OK']);
}
else {
  $id1='?'; $id2=''; $id3='';
  $id4=''; $id5=''; $id6='';
  $id7=''; 
}

?>
</center>

<div id="view">
<p>With the help of Dr. Watson, you spend the afternoon searching the various guests present the night of the murder.</p>
<img src="map.png" alt="map" usemap="#map">
</div>

<!--
<p>List of items found on the guests:</p>
<ul>
<li>Mrs White: In her room, scattered to the four corners of the room, you've found a key, a smartphone, a bag of kibble for her cat and a dagger.</li>
<li>Miss Pink: A purse containing keys, a mobile phone, a horseshoe, a four-leaf clover, a rabbit foot and a rope.</li>
<li></li>
<li>Dr Green: a medical kit bag made of calfskin containing among others a stethoscope, antibiotics and a wrench.</li>
<li> </li>
</ul>
-->

<br>


</div>

<MAP NAME="map">
<AREA shape="rect" coords="99,7,495,190" HREF="javascript:room('gallery')" ALT="collection" />
<AREA shape="rect" coords="7,99,104,189" HREF="javascript:room('hall')" ALT="collection" />
<AREA shape="rect" coords="100,311,405,490" HREF="javascript:room('dinner')" ALT="collection" />
<AREA shape="rect" coords="406,312,507,486" HREF="javascript:room('office')" ALT="collection" />
<AREA shape="rect" coords="508,313,607,486" HREF="javascript:room('boudoir')" ALT="collection" />
<AREA shape="rect" coords="607,312,694,490" HREF="javascript:room('saloon')" ALT="collection" />
<AREA shape="rect" coords="9,399,100,490" HREF="javascript:room('restroom')" ALT="collection" />
<AREA shape="poly" coords="496,6,600,6,602,97,693,98,693,194,496,192" HREF="javascript:room('kitchen')" ALT="collection" />
</MAP>
</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
