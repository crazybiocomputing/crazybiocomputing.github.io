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
if (isset($_POST['cds']) ) {
  if (strpos($_POST['cds'],'152') !== false && strpos($_POST['cds'],'1405') !== false) {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="void.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;
}

?>

<p>LOCUS NM_008828
<form action="code.php" method="post">

<label>CDS</label> 
<input style="font-size : 40px; font-family :  arial,sans serif;" type="text" size=6  name="cds"></input><br />
<input style="font-size : 40px; font-family :  arial,sans serif;float:right" type="submit" name="OK" value="OK"></input><br />
</form>

</div>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
