<?php
	require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
	include('../../phpCrazy/header.inc.php');
?>

<style>
td {
  font-size: 20px;
  text-align: center;
  width: 40px;
  height: 40px;
}

input {
  font-size: 40px;
  width: 60px;
  height: 60px;
  text-align: center;
}

</style>

<script type="text/javascript">
function checkInput(id) {
  console.log(id+' '+document.getElementById(id).value);
  var value=document.getElementById(id).value.toUpperCase();
  
  document.getElementById(id).value=value;
}

</script>

<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 40px; font-family :  arial,sans serif;">
<?php
if (isset($_POST['OK']) ) {
  if ( ($_POST['01']=='A' || $_POST['01']=='a') && $_POST['02']=='-' && ($_POST['03']=='Z' || $_POST['03']=='z') && $_POST['04']=='-' 
  &&   ($_POST['05']=='E' || $_POST['05']=='e') && ($_POST['06']=='R' || $_POST['06']=='r') && ($_POST['07']=='T' || $_POST['07']=='t') && $_POST['08']=='-'
  &&  $_POST['11']=='-' && ($_POST['12']=='T' || $_POST['12']=='t') && ($_POST['13']=='Y' || $_POST['13']=='y') && ($_POST['14']=='R' || $_POST['14']=='r')
  &&  ($_POST['15']=='S' || $_POST['15']=='s') && $_POST['16']=='-' && $_POST['17']=='-' && ($_POST['18']=='D' || $_POST['18']=='d')) {
    echo '<p>- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="heroes.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p>- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;

  $c00=$_POST['00'];$c01=$_POST['01'];$c02=$_POST['02'];$c03=$_POST['03'];$c04=$_POST['04'];$c05=$_POST['05'];$c06=$_POST['06'];$c07=$_POST['07'];$c08=$_POST['08'];
  $c10=$_POST['10'];$c11=$_POST['11'];$c12=$_POST['12'];$c13=$_POST['13'];$c14=$_POST['14'];$c15=$_POST['15'];$c16=$_POST['16'];$c17=$_POST['17'];$c18=$_POST['18'];
 
}
else {
  $c00='';$c01='';$c02='';$c03='';$c04='';$c05='';$c06='';$c07='';$c08='';
  $c10='';$c11='';$c12='';$c13='';$c14='';$c15='';$c16='';$c17='';$c18='';

}



?>
<table>
<tr><td>&nbsp;</td><td>&nbsp;</td><td>A</td><td>Z</td><td>E</td><td>R</td><td>T</td><td>Y</td></tr>
<tr><td>&nbsp;</td><td>⚑</td><td>&larr;</td><td>&larr;</td><td>&larr;</td><td>&larr;</td><td>&larr;</td><td>&larr;</td></tr>
<tr><td>T</td><td>&uarr;</td><td>&uarr;</td><td>&larr;</td><td>&larr;</td><td>&larr;</td><td>&#8598;</td><td>&larr;</td></tr>
<tr><td>Y</td><td>&uarr;</td><td>&uarr;</td><td>&#8598;</td><td>&#8598;</td><td>&#8598;</td><td>&uarr;</td><td>&#8598;</td></tr>
<tr><td>R</td><td>&uarr;</td><td>&uarr;</td><td>&uarr;</td><td>&#8598;</td><td>&#8598;</td><td>&larr;</td><td>&uarr;</td></tr>
<tr><td>S</td><td>&uarr;</td><td>&#8598;</td><td>&#8598;</td><td>&#8598;</td><td>&larr;</td><td>&larr;</td><td>&larr;</td></tr>
<tr><td>D</td><td>&uarr;</td><td>&uarr;</td><td>&#8598;</td><td>&#8598;</td><td>&#8598;</td><td>&uarr;</td><td>&#8598;</td></tr>
<tr><td>H</td><td>&uarr;</td><td>&uarr;</td><td>&uarr;</td><td>&#8598;</td><td>&#8598;</td><td>&uarr;</td><td>&#8598;</td></tr>
<form action="wunsch.php" method="post">
<table>
<tbody>
<tr>
    <td><input id="00" type="text" size=2 name="00" value="<?php echo $c00?>" onkeydown="checkInput('00')"></input></td>
    <td><input id="01" type="text" size=2 name="01" value="<?php echo $c01?>" onkeydown="checkInput('01')"></input></td>
    <td><input id="02" type="text" size=2 name="02" value="<?php echo $c02?>" onkeydown="checkInput('02')"></input></td>
    <td><input id="03" type="text" size=2 name="03" value="<?php echo $c03?>" onkeydown="checkInput('03')"></input></td>
    <td><input id="04" type="text" size=2 name="04" value="<?php echo $c04?>" onkeydown="checkInput('04')"></input></td>
    <td><input id="05" type="text" size=2 name="05" value="<?php echo $c05?>" onkeydown="checkInput('05')"></input></td>
    <td><input id="06" type="text" size=2 name="06" value="<?php echo $c06?>" onkeydown="checkInput('06')"></input></td>
    <td><input id="07" type="text" size=2 name="07" value="<?php echo $c07?>" onkeydown="checkInput('07')"></input></td>
    <td><input id="08" type="text" size=2 name="08" value="<?php echo $c08?>" onkeydown="checkInput('08')"></input></td>
    <td style="font-size:40px">Y</td>

</tr>
<tr>
    <td><input id="10" type="text" size=2 name="10" value="<?php echo $c10?>" onkeydown="checkInput('10')"></input></td>
    <td><input id="11" type="text" size=2 name="11" value="<?php echo $c11?>" onkeydown="checkInput('11')"></input></td>
    <td><input id="12" type="text" size=2 name="12" value="<?php echo $c12?>" onkeydown="checkInput('12')"></input></td>
    <td><input id="13" type="text" size=2 name="13" value="<?php echo $c13?>" onkeydown="checkInput('13')"></input></td>
    <td><input id="14" type="text" size=2 name="14" value="<?php echo $c14?>" onkeydown="checkInput('14')"></input></td>
    <td><input id="15" type="text" size=2 name="15" value="<?php echo $c15?>" onkeydown="checkInput('15')"></input></td>
    <td><input id="16" type="text" size=2 name="16" value="<?php echo $c16?>" onkeydown="checkInput('16')"></input></td>
    <td><input id="17" type="text" size=2 name="17" value="<?php echo $c17?>" onkeydown="checkInput('17')"></input></td>
    <td><input id="18" type="text" size=2 name="18" value="<?php echo $c18?>" onkeydown="checkInput('18')"></input></td>
    <td style="font-size:40px">H</td>
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
