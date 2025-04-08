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
  margin-top:10px;
}

#column1 {
  float:left;
  margin-right:30px;
}

</style>


<div id="page">
<div id="content">
<div id="myform" style="width:800px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<div id="column1">
<p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;1: Sequences</p>


<?php
$id=array('?','?','?','?','?','?','?','?','?');
$ans=array('MYG_HORSE','MYG_HUMAN','MYG_THUOR','MYG_CHEMY','MYG_DELDE','MYG_ALLMI','MYG_PANTR','MYG_PHYCD','MYG_APTFO');

if (isset($_POST['OK']) ) {
  $id[0]=trim(strtoupper($_POST['locus1']));
  $id[1]=trim(strtoupper($_POST['locus2']));
  $id[2]=trim(strtoupper($_POST['locus3']));
  $id[3]=trim(strtoupper($_POST['locus4']));
  $id[4]=trim(strtoupper($_POST['locus5']));
  $id[5]=trim(strtoupper($_POST['locus6']));
  $id[6]=trim(strtoupper($_POST['locus7']));
  $id[7]=trim(strtoupper($_POST['locus8']));
  $id[8]=trim(strtoupper($_POST['locus9']));

  $score=0;

  $stars='';
  for ($i=0;$i<9;$i++) {
    if ($id[$i] == $ans[$i] ) {
      $score|=pow(2,$i);
      $stars.='&#x2605;';
    }
    else
     $stars.='&#x2606;';
  }

  if ($score==511)   
    echo $stars.' <a title="Click on \'yes\'" style="text-decoration:none" href="tubes.php">Yeeess!!!</a>';
  else
    echo $stars.' W r o n g &nbsp; a n s w e r</p>' ;


  echo '<ul>';
  if ($id[0]=='MYG_EQUBU')
    echo '<li>1- <a href="http://en.wikipedia.org/wiki/Plains_zebra">A horse? </a></li>';
  for ($i=0;$i<9;$i++) {
    $pos=strpos($id[$i],'MYG');
    if ($id[$i]!='?' && $pos === false)
      echo '<li>'.($i+1).'- Is it a UniprotKB/SwissProt entry?</li>';
  }

  echo '</ul>';

}

?>

<form action="globins.php" method="post">
<label>Locus#1: </label><input type="text" size=10 name="locus1" value="<?php echo $id[0]; ?>"></input><br>
<label>Locus#2: </label><input type="text" size=10 name="locus2" value="<?php echo $id[1]; ?>"></input><br>
<label>Locus#3: </label><input type="text" size=10 name="locus3" value="<?php echo $id[2]; ?>"></input><br>
<label>Locus#4: </label><input type="text" size=10 name="locus4" value="<?php echo $id[3]; ?>"></input><br>
<label>Locus#5: </label><input type="text" size=10 name="locus5" value="<?php echo $id[4]; ?>"></input><br>
<label>Locus#6: </label><input type="text" size=10 name="locus6" value="<?php echo $id[5]; ?>"></input><br>
<label>Locus#7: </label><input type="text" size=10 name="locus7" value="<?php echo $id[6]; ?>"></input><br>
<label>Locus#8: </label><input type="text" size=10 name="locus8" value="<?php echo $id[7]; ?>"></input><br>
<label>Locus#9: </label><input type="text" size=10 name="locus9" value="<?php echo $id[8]; ?>"></input><br>
<input type="submit" name="OK" value="OK"></input>
</form>
</div>

<div id="column2">
<img src="dialog2.png" usemap="#dialog">
</div>

<MAP NAME="dialog">
<AREA shape="rect" coords="102,45,326,81" HREF="dataseq.php" ALT="data" />
</MAP>
<br>


</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
