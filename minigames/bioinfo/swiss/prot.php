<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>


<div id="page">
<div id="content">
<div id="myform" style="width:600px;margin-left:auto;font-size : 40px; font-family :  arial,sans serif;">
<?php
if (isset($_POST['de']) ) {
  $a = strtolower($_POST['de']);
  if (strpos($a,'insulin') !== false) {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="neon.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;
}

?>

<p>AC P01308
<form action="prot.php" method="post">

<label>DE</label> 
<input style="font-size : 40px; font-family :  arial,sans serif;" type="text" size="12" name="de"></input><br /><br />
<input style="font-size : 40px; font-family :  arial,sans serif;margin-left:80%" type="submit" name="OK" value="OK"></input><br />
</form>

</div>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
