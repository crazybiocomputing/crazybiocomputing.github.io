<?php
  require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
  include('../../phpCrazy/header.inc.php');
?>


<div id="page">
<div id="content">

<pre># Matrix: EBLOSUM45
# Gap_penalty: 10.0
# Extend_penalty: 1.0
</pre>

<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<?php
if (isset($_POST['OK']) ) {
  echo $_POST['score'];
  if (strpos($_POST['score'],'328')=== false ) {
    echo '<p style=";font-size : 40px;">- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;
  }
  else
    echo '<p style=";font-size : 40px;">- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="sinister.php">Yeeess!!!</a></p>';
}

?>

<pre>
>Sequence 1
MVLSADDKTNIKNCWGKIGGHGGEYGEEALQRMFA
AFPTTKTYFSHIDVSPGSAQVKAHGKKVADALAKA
ADHVEDLPGALSTLSDLHAHKLRVDPVNFKFLSHC
LLVTLACHHPGDFTPAMHASLDKFLASVSTVLTSK
YR

>Sequence 2
MVHLTDAEKATVSGLWGKVNADNVGAEALGRLLVV
YPWTQRYFSKFGDLSSASAIMGNPQVKAHGKKVIN
AFNDGLKHLDNLKGTFAHLSELHCDKLHVDPENFR
LLGNMIVIVLGHHLGKEFTPCAQAAFQKVVAGVAS
ALAHKYH
</pre>

<form action="global.php" method="post">
<label>Score:</label><input type="text" size=4 name="score" value="0"></input>
<input type="submit" name="OK" value="OK"></input>
</form>
</div>


</div>
</div>

<?php
  include('../../phpCrazy/footer.inc.php');
?>
