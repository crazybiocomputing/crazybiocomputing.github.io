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

</style>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;2: ....like 3D</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<center>
<?php

if (isset($_POST['OK']) ) {
  $id1=strtoupper($_POST['struct']);

  if ($id1=='1MBN')
    echo '<p style="font-size : 40px;">&#x2605;&#x2605;&#x2605;<a title="Click on \'yes\'" style="text-decoration:none" href="ninja.php">Yeeess!!!</a></p>';
  else
    echo '<p style="font-size : 40px;"&#x2606;&#x2606;&#x2606;W r o n g &nbsp; a n s w e r</p>' ;
}
else {
  $id1="0xxx";
}

?>
</center>


<form action="whale.php" method="post">
<label>ID</label><input type="text" size=10 name="struct" value="<?php echo $id1; ?>"></input>
<input type="submit" name="OK" value="OK"></input>
</form>
<center><img src="dialog.png"></center>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
