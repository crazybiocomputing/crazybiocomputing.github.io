<?php
session_start();
$_SESSION['aide']=1;
?>

<?php
	include('../../phpCrazy/header_help.inc.php');
?>

<div id="page">
<div id="content">
<center>

<br />
<p>Click on <span style="padding:10px;text-decoration: none;text-transform: uppercase;font-family: Arial, Helvetica, sans-serif;font-size: 14px;font-weight: normal;color: #FFFFFF;background-color:black;">[ L e v e l # <?php echo $level;?> &mdash; g a m e # <?php echo $gameIndex;?> ]</span> to return to the mini-game </p>
<br />

<img src="expasy_logo.png"></img>
<p>
<span style="font-size: 150%;">&nbsp;is your friend</span>
</p>


</center>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
</body>
</html>
