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
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;2: Alignement</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<p>The most conserved (and interesting) fragment of sequences is ...</p>
<center>
<pre>
[** .*:. ** :** *  *   :***:::*]
</pre>
<br>

<?php

if (isset($_POST['OK']) ) {
  $id1=strtoupper($_POST['from']);
  $id2=strtoupper($_POST['to']);

  $score=0;
  if ($id1=='65') {
    $score =1;
    echo '<p style="font-size : 40px;">&#x2605;';
  }
  else
    echo '<p style="font-size : 40px;">&#x2606;';


  if ($id2=='94') {
    echo '&#x2605;';
    $score +=2;
  }
  else
    echo '&#x2606;';



  if ($score==3)   
    echo '<a title="Click on \'yes\'" style="text-decoration:none" href="pass.php">Yeeess!!!</a>';
  else
    echo 'W r o n g &nbsp; a n s w e r</p>' ;
}
else {
  $id1=$id2=0;
}

?>
</center>


<form action="align.php" method="post">
<label>Sequence #2 &rarr; From: </label><input type="text" size=10 name="from" value="<?php echo $id1; ?>"></input>
<label>To: </label><input type="text" size=10 name="to" value="<?php echo $id2; ?>"></input>

<input type="submit" name="OK" value="OK"></input>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
