<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>


<div id="page">
<div id="content">
<center>
<p><img src="background.png" width="800px"></img>
</center>

<div id="myform" style="width:600px;margin-left:auto;font-size : 40px; font-family :  arial,sans serif;">
<?php
if (isset($_POST['ec']) ) {
  $a = strtolower($_POST['ec']);
  if (strpos($a,'1.2.4.1') !== false) {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="pyrdh.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;
}

?>

<form action="enzyme.php" method="post">

<label>EC</label> 
<input style="font-size : 40px; font-family :  arial,sans serif;" type="text" size="8" name="ec"></input>
<input style="font-size : 40px; font-family :  arial,sans serif;" type="submit" name="OK" value="OK"></input>
</form>

</div>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
