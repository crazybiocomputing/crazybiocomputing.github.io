<?php
  require('../../phpCrazy/cookie_check_crazybio.inc.php');
?>
<?php
  include('../../phpCrazy/header.inc.php');
?>
<link href='http://fonts.googleapis.com/css?family=Coda' rel='stylesheet' type='text/css'>

<style>
label {
  display:block;
  float:left;
  text-align:right;
  width:200px;
  font-family: 'Coda', monospace;
  font-size:18px;
  color:#646464;";

}

input {
  float: left;
  font-size: 18px;
  font-family: 'Coda', sans-serif;
  border: none;
  background-color: #adf;
}
</style>


<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<?php
if (isset($_POST['submit'])) {
  $id=strtoupper($_POST['sequid']);
  if ( ($id=='AAC33275.1' || $id=='AAC33275'|| 
        $id=='CAC42282.1' || $id=='CAC42282'||  
        $id=='NP_501926.1'|| $id=='NP_501926') )
    
    echo '<span style="font-size : 30px;background:yellow;">&#9786;&#9786;&#9786;<a title="Click on \'congratulations\'" style="text-decoration:none" href="rocket.php"> Congratulations!!!</a></span></p>';
  else
      echo '<span style="font-size : 30px;">&#9785;&#9785;&#9785; W r o n g &nbsp; a n s w e r</span></p>' ;

}

?>


<pre>
>Unknown
ATGGCCCTGTGGATGCGCCTCCTGCCCCTGCTGGCGCTGCTGGCCCTCTGGGGACCTGACCCAGCCGCAG
CCTTTGTGAACCAACACCTGTGCGGCTCACACCTGGTGGAAGCTCTCTACCTAGTGTGCGGGGAACGAGG
CTTCTTCTACACACCCAAGACCCGCCGGGAGGCAGAGGACCTGCAGGTGGGGCAGGTGGAGCTGGGCGGG
GGCCCTGGTGCAGGCAGCCTGCAGCCCTTGGCCCTGGAGGGGTCCCTGCAGAAGCGTGGCATTGTGGAAC
AATGCTGTACCAGCATCTGCTCCCTCTACCAGCTGGAGAACTACTGCAACTAG
</pre>
<center>
<img src="http://upload.wikimedia.org/wikipedia/commons/b/be/CrawlingCelegans.gif">
</center>
<br>
<form action="beast.php" method="post">
<label>Locus:</label> <input type="text" size="40" name="sequid"><br>
<label></label><input type="submit" name="submit" value="Submit"><br>
</form>
</div>


</div>
</div>

<?php
  include('../../phpCrazy/footer.inc.php');
?>
