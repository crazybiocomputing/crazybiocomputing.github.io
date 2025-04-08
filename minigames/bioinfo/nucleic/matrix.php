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
if (isset($_POST['OK']) ) {
  if ($_POST['00']=='5' && $_POST['11']=='5' &&$_POST['22']=='5' &&$_POST['33']=='5'
  &&  $_POST['02']=='3' && $_POST['13']=='3' &&$_POST['20']=='3' &&$_POST['31']=='3'
  &&  $_POST['01']=='1' && $_POST['03']=='1' &&$_POST['10']=='1' &&$_POST['30']=='1'
  &&  $_POST['12']=='1' && $_POST['23']=='1' &&$_POST['21']=='1' &&$_POST['32']=='1') {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="phosphorus.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;

  $c00=$_POST['00'];$c01=$_POST['01'];$c02=$_POST['02'];$c03=$_POST['03'];
  $c10=$_POST['10'];$c11=$_POST['11'];$c12=$_POST['12'];$c13=$_POST['13'];
  $c20=$_POST['20'];$c21=$_POST['21'];$c22=$_POST['22'];$c23=$_POST['23'];
  $c30=$_POST['30'];$c31=$_POST['31'];$c32=$_POST['32'];$c33=$_POST['33'];
}
else {
  $c00=0;$c01=0;$c02=0;$c03=0;
  $c10=0;$c11=0;$c12=0;$c13=0;
  $c20=0;$c21=0;$c22=0;$c23=0;
  $c30=0;$c31=0;$c32=0;$c33=0;
}



?>
<p>Transition:3,Transversion:1,Identity:5</p>
<form action="matrix.php" method="post">
<table>
<tbody>
<tr><td>&nbsp;</td><td>A</td><td>C</td><td>G</td><td>T</td></tr>
<tr><td>A</td>
    <td><input type="text" size=2 name="00" value="<?php echo $c00?>"></input></td>
    <td><input type="text" size=2 name="01" value="<?php echo $c01?>"></input></td>
    <td><input type="text" size=2 name="02" value="<?php echo $c02?>"></input></td>
    <td><input type="text" size=2 name="03" value="<?php echo $c03?>"></input></td>
</tr>
<tr><td>C</td>
    <td><input type="text" size=2 name="10" value="<?php echo $c10?>"></input></td>
    <td><input type="text" size=2 name="11" value="<?php echo $c11?>"></input></td>
    <td><input type="text" size=2 name="12" value="<?php echo $c12?>"></input></td>
    <td><input type="text" size=2 name="13" value="<?php echo $c13?>"></input></td>
</tr>
<tr><td>G</td>
    <td><input type="text" size=2 name="20" value="<?php echo $c20?>"></input></td>
    <td><input type="text" size=2 name="21" value="<?php echo $c21?>"></input></td>
    <td><input type="text" size=2 name="22" value="<?php echo $c22?>"></input></td>
    <td><input type="text" size=2 name="23" value="<?php echo $c23?>"></input></td>
</tr>
<tr><td>T</td>
    <td><input type="text" size=2 name="30" value="<?php echo $c30?>"></input></td>
    <td><input type="text" size=2 name="31" value="<?php echo $c31?>"></input></td>
    <td><input type="text" size=2 name="32" value="<?php echo $c32?>"></input></td>
    <td><input type="text" size=2 name="33" value="<?php echo $c33?>"></input></td>
</tr>

</tbody>
</table>
<input type="submit" name="OK" value="OK"></input>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
