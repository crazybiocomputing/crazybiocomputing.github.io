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
}

</style>


<div id="page">
<div id="content">
<br />


<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">
<?php

if (isset($_POST['OK']) ) {
  if ($_POST['os']=='tarantula') {
    echo '<p style="font-size : 40px;">- &#x2605; &#x2605; &#x2605; - <a title="Click on \'yes\'" style="text-decoration:none" href="next_one.php">Yeeess!!!</a></p>';
  }
  else
    echo '<p style="font-size : 40px;">- &#x2606; &#x2606; &#x2606; - W r o n g &nbsp; a n s w e r</p>' ;


}

?>

<p>A student was bitten by an animal during a practical session triggering pain crisis and huge fever. 
He was sent to the hospital and various analysis were done especially transcriptomics. 
You received these results... What is the name of this animal?
<pre>
>seq001
CCAGGTGGCGGGGTACACGATGTGCCAGTGCCAGTGGTGGGCGTTGGTGCCCACGTCCTC
CTTGAAGTAGGCCAGCTTGTACTCCTCGTCCAGGATGTTGCCGGTCTCCACCACGTGCAC
GCTGATGTCCTGGTCGGGGTGGTTGGCGGCCTCCTTCACGGCCAGGTTGATGGTCTCGGT
GGGCACGAATCTGTCGGGGAAGATCTCCTGGATGGCGGGCACCACGATGCCCTTGCAGTC
GTCTCTGTGCAGCAGGGCCACGCTCACGGCGTACACGAACAGGCCCTCGTTCACGAAGGT
TCTGCTCTGCTTGGCCAGGTTGATCACCTCGTCGAAGTCCTTGGCGGTGTACAGGATCTT
GTACAGCTCGGTGGCCTCCTCCAGGTCCTCCTCGTGGAAGCAGCTGAACAGCTCGCCCTG
GGGCAGTCTGCCCAGGTGGTGCAGTCTGGCGTCGATCTGGTCTCTGGGCAGGGGGGTGTT
GATGCTGGTCATGTGCTCGAACAGGCTGATCACTCTCAGCTGCTTCTGCTTGTCGGGCAT

>seq002
ATGATCCCCTTCAGCAACTTCGACGAGAAGCTGGAGGGCTACAGCGCCCACCTGACCAGC
CTGGTGAGCGGCCTGCCCTACGCCTTCAGACCCGACGGCCTGTGCAGAGAGGCCACCGAG
GACCTGCACGACCTGAAGGACATCGACCTGAAGGAGATGTTCAGATGGAGAGAGAGAATC
CTGGACGCCATCGACAGCGGCTACTACATCGACAACGAGGGCCACCAGGTGAAGCTGGAC
ATCGTGGACGGCATCAACGTGCTGGGCGCCCTGATCGAGAGCAGCTTCGAGACCAAGAAC
AAGCTGTACTACGGCAGCCTGCACAACTGGGGCCACGTGATGATGGCCAGACTGCAGGAC
CCCGAGGAGAAGAGCGCCGTGACCGCCCTGTGGGGCAAGGTGAACGTGGACGAGGTGGGC
GGCGAGGCCCTGGGCAGACTGCTGGTGGTGTACCCCTGGACCCAGAGATTCTTCGAGAGC
TTCGGCGACCTGAGCACCCCCGACGCCGTGATGGGCAACCCCAAGGTGAAGGCCCACGGC
AAGAAGGTGCTGGGCGCCTTCAGCGACGGCCTGGCCCACCTGGACAACCTGAAGGGCACC
TTCG
</pre>


<form action="explore.php" method="post">
<label>Organism Name:</label><input type="text" size=10 name="os" value="unknown"></input>
<input type="submit" name="OK" value="OK"></input>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
