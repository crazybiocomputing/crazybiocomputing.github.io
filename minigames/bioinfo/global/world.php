<?php
  require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
  include('../../phpCrazy/header.inc.php');
?>

<style>

input {
  font-size: 20px;
  text-align: center;
  width: 30px;
  line-height: 30px;
  border:none;
}

td {
  font-size : 20px;
  font-family :monospace;
  text-align:center;
  width: 30px;
  line-height: 30px;
  padding-left: 0px;
}

</style>


<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<?php
/* score = +9 -2 -10 +4 +4 +4 -10 +5 -1=-15 */
if (isset($_POST['OK']) ) {
  if ($_POST['red']=='12') {
    echo '<p style="font-size:40px">- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="video.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p  style="font-size:40px">- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;


}

?>
<p>Gap Penalty:<span style="background-color:#000">@@@</span> - Matrix: BLOSUM50 (see Help)</p>

<form action="world.php" method="post">
<table style="border: 1px solid;width:700px;margin:auto;">
<thead>S u m&nbsp;&nbsp;&nbsp;m a t r i x</thead>
<tr style="background-color:#0f0"><td>x</td><td>&nbsp;</td><td>A</td><td>L</td><td>T</td><td>E</td><td>R</td><td>N</td><td>A</td><td>T</td><td>E</td></tr>
<tr><td style="background-color:#0f0">&nbsp;</td><td style="background-color:#22f">0</td><td>-3</td><td>-6</td><td>-9</td><td>-12</td><td>-15</td><td>-18</td><td>-21</td><td>-24</td><td>-27</td></tr>
<tr><td style="background-color:#0f0">T</td><td>-3</td><td>0</td><td>-3</td><td>-1</td><td>-4</td><td>-7</td><td>-10</td><td>-13</td><td>-16</td><td>-19</td></tr>
<tr><td style="background-color:#0f0">E</td><td>-6</td><td>-3</td><td>-3</td><td>-4</td><td>5</td><td>2</td><td>-1</td><td>-4</td><td>-7</td><td>-10</td></tr>
<tr><td style="background-color:#0f0">R</td><td>-9</td><td>-6</td><td>-6</td><td>-4</td><td>2</td><td style="background-color:red"><input type="text" style="background-color:red;" name="red" value="0"></input></td><td><input type="submit" name="OK" value="ok"></input></td></tr>
<tr><td style="background-color:#0f0">M</td></tr>
<tr><td style="background-color:#0f0">I</td><td></td></tr>
<tr><td style="background-color:#0f0">T</td><td></td></tr>
<tr><td style="background-color:#0f0">E</td><td></td></tr>
</table>

</form>

</div>


</div>
</div>

<?php
  include('../../phpCrazy/footer.inc.php');
?>
