<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>


<div id="page">
<div id="content">

<div id="myform" style="width:700px;margin-left:auto;font-size : 40px; font-family :  arial,sans serif;">

<?php
if (isset($_POST['weight']) ) {
  if (strpos($_POST['weight'],'909')=== false ) {
    echo '<p>Bad answer</p>';
  }
  else
    echo '<p>You win. The code is upsilon.php</p>';


}

?>

<p><img src="background.png"></img></p>
<form style="position:relative;top:-120px; left:170px" action="weight.php" method="post">
  <input style="font-size:30px;background-color:#000;color:white;text-decoration:none;border:none;width:200px" size=9 type="text" name="weight">
  <input style="font-size:30px;background-color:#000;color:white;text-decoration:none;border:none" type="submit" name="OK" value="OK">
</form>
</div>

</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
