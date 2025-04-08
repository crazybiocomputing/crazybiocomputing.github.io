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
}

</style>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;2: Exploring the samples.</p>
<div id="myform" style="width:700px;margin:auto;font-size : 20px; font-family :  arial,sans serif;">

<center>
<?php

if (isset($_POST['OK']) ) {
  $id1=preg_split("/\s+/",trim(strtoupper($_POST['item1'])) );
  $id2=preg_split("/\s+/",trim(strtoupper($_POST['item2'])) );
  $id3=preg_split("/\s+/",trim(strtoupper($_POST['item3'])) );
  $id4=preg_split("/\s+/",trim(strtoupper($_POST['item4'])) );

  $score=0;
  if ($id1[0]=='BALAENOPTERA' && ($id1[1]=='MUSCULUS' || $id1[1]=='BOREALIS' || $id1[1]=='PHYSALUS')  ) {
    $score =1;
    echo '<p style="font-size : 40px;">&#x2605;';
    $id1='Balaenoptera physalus';
  }
  else {
    echo '<p style="font-size : 40px;">&#x2606;';
    $id1='?';
  }


  if ($id2[0]=='PANTHERA' && $id2[1]=='PARDUS') {
    $score +=2;
    echo '&#x2605;';
    $id2='Panthera pardus';
  }
  else {
    echo '&#x2606;';
    $id2='?';
  }


  if ($id3[0]=='ORYCTOLAGUS' && $id3[1]=='CUNICULUS') {
    $score +=4;
    echo '&#x2605;';
    $id3='Oryctolagus cuniculus';
  }
  else {
    echo '&#x2606;';
    $id3='?';
  }

  if ($id4[0]=='NICOTIANA' && $id4[1]=='TABACUM') {
    echo '&#x2605;';
    $score +=8;
    $id4='Nicotiana tabacum';
  }
  else {
    echo '&#x2606;';
    $id4='?';
  }




  if ($score==15)   
    echo '<p><a title="Click on \'yes\'" style="text-decoration:none" href="skullbones.php">Yeeess!!!</a></p>';
  else
    echo '<p>W r o n g &nbsp; a n s w e r</p>' ;
}
else {
  $id1='?'; $id2='?'; $id3='?'; $id4='?'; 
}

?>
</center>
<br />
<p>Once in the lab, you extract DNA and sequence your samples. Here are the results...</p>
<pre>
> Sample#A
AATCGGAGATGACCAAGTCTACAACGTATTAGTAACAGCCCACGCCTTCGTGATAATCTTCTTCATAGTT
ATACCTATTATAATCGGCGGATTCGGAAATTGACTGGTCCCTCTAATGATTGGAGCACCCGACATAGCCT
TCCCTCGTATAAATAACATAAGCTTCTGACTACTCCCTCCTTCCTTCCTACTCTTAATAGCATCCTCAAT

> Sample#B
CGGCAACCTAGCCCATGCAGGGGCATCCGTAGATTTAACTATTTTTTCACTACACCTGGCAGGTGTCTCC
TCAATCTTAGGCGCTATTAATTTTATTACTACTATTATTAATATAAAACCCCCTGCTATATCCCAATACC
AAACACCTCTATTCGTCTGATCGGTCTTAATCACTGCTGTATTGCTACTCCTATCACTGCCAGTTTTAGC

> Sample#C
TCCCCCTGATAATTGGGGCTCCTGACATAGCCTTCCCCCGAATAAATAATATGAGCTTCTGACTTCTCCC
CCCTTCATTCCTTCTTCTACTAGCCTCCTCAATAGTAGAAGCTGGGGCGGGGACTGGCTGAACTGTTTAT
CCACCTCTAGCCGGTAATCTTGCACATGCTGGAGCCTCAGTGGATCTTACTATTTTCTCCCTTCACTTAG

> Sample#D
TTCCACTGCTTGAAGTTATTGTTACGACCACGAAGAAACGACAAATCCCAACTACGGATATATAAGAGCC
AAAACTGCTAAGGGCATTCCATCCAGCGTAAGCATCTGGATAATCTGGAATGCGACGTGGCATACCCGAA
AGCCCTAAGAAATGCATAGGAAAGAAGGTCATATTAACCCCGAAAAAAGTGATCCAAAAATGGATTTGAC
</pre>

<br>
<form action="dna.php" method="post">
<label>Organism name of A </label><input type="text" size=20 name="item1" value="<?php echo $id1; ?>"></input><br>
<label>Organism name of B </label><input type="text" size=20 name="item2" value="<?php echo $id2; ?>"></input><br>
<label>Organism name of C </label><input type="text" size=20 name="item3" value="<?php echo $id3; ?>"></input><br>
<label>Organism name of D </label><input type="text" size=20 name="item4" value="<?php echo $id4; ?>"></input><br>

<input type="submit" name="OK" value="OK"></input>
</form>

</div>


</div>
</div>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
