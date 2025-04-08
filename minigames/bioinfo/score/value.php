<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<style>
td {
  font-size: 40px;
  text-align: center;
  width: 80px;
  height: 80px;
}

input {
  font-size: 40px;
  width: 80px;
  height: 80px;
  text-align: center;
}

</style>


<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 40px; font-family :  arial,sans serif;">
<?php
/* score = +9 -2 -5 +4 +4 +4 -5 +5 -1=3 */
if (isset($_POST['OK']) ) {
  if ($_POST['score1']=='13' && $_POST['score2']=='8') {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="alternate.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;


}

?>
<ul><li>Gap Penalty:5</li>
<li>Gap Extension Penalty: 2</li>
<li>Matrix: BLOSUM62 (see Help)</li>

<pre style="font-family:monospace;">
CHEVAL-ET    TRAVAILLE
|  ||| |       |||  ||
CA-VALIER    C-AVA--LE
</pre>

<form action="value.php" method="post">
<label>Score #1:</label><input type="text" size=4 name="score1" value="0"></input>
<label>Score #2:</label><input type="text" size=4 name="score2" value="0"></input>
<input type="submit" name="OK" value="OK"></input>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
