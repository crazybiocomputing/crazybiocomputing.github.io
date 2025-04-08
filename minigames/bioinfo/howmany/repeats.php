<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>



<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 40px; font-family :  arial,sans serif;">
<?php
if (isset($_POST['answer']) ) {
  if ($_POST['answer']==14) 
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="repair.php">Yeeess!!!</a></p>';
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;
}

?>

<pre style="font-size:18px">
peaspeaceblackrepeatseyedpeaspeachpeakrepeatspealpeanut
pearpearlpeasantrepeatspeashooterpeatpecanpestpetalrepe
atspeterpetitepetrolpettyrepeatsrepairrepaidreparationr
epeatsreparteerepatriaterepayrepealrepelrepeatsrepeatsr
pearpearlpeasantrepeatspeashooterpeatpecanpestpetalrepe
atspeterpetitepetrolpettyrepeatsrepairrepaidreparationr
peaspeaceblackrepeatseyedpeaspeachpeakrepeatspealpeanut
epentrepellentrepeatsrepercussionreplacereplica
</pre>

<form action="repeats.php" method="post">

<label>How many repeats?</label> 
<input style="font-size : 32px; font-family :  arial,sans serif;" type="text" size="12" name="answer"></input>
<input style="font-size : 32px; font-family :  arial,sans serif;margin-left:80%" type="submit" name="OK" value="OK"></input><br />
</form>
</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
