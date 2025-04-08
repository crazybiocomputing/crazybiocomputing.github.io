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

#popup {
  background: #FFFFFF;
  border: 2px solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  -moz-border-top-left-radius: 10px;
  -moz-border-top-right-radius: 10px;
  display:inline-block;
  text-align: left;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9999;
}

#popup .titlebar {
  background-color:#666666 ;
  margin: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -moz-border-top-left-radius: 10px;
  -moz-border-top-right-radius: 10px;
  color: #FFFFFF;
  font-family: 'Walter Turncoat', cursive;
}

#popup .contents {
  padding: 2px 10px 2px 10px;
}


</style>


<div id="page">
<div id="content">
 <p style="font-family: 'Walter Turncoat', cursive;font-size:30px">C&nbsp;h&nbsp;a&nbsp;p&nbsp;t&nbsp;e&nbsp;r&nbsp;&nbsp;&nbsp;3: Exploring the samples.</p>
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
<p style="font-family: 'Walter Turncoat'">Once in the lab...</p>
<img src="background.jpg" usemap="#files"></img>

<MAP NAME="files">
<AREA id="head" shape="rect" coords="345,40,412,120" href="#" ALT="collection" />
<AREA id="file" shape="poly" coords="290,140,316,121,353,156,334,181" href="#" ALT="collection" />
</MAP>

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
<div id="popup"></div>

<script>
  const seqs = `
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
`;

const msg = `
As you asked, I extracted DNA and I sequenced your samples. The results are now available...
It's your turn to give me the origins of these samples`;

const samples = (txt) => (ev) => { 

  var popup = document.getElementById('popup');
  popup.style.visibility = 'visible';
  popup.innerHTML=`
  <div class="titlebar">
    <a href="javascript:void(0)">
    <img src="assets/closeButton.png"></img>
    </a>&nbsp;&nbsp;
  </div>
  <div class="contents"> 
    <pre>${txt}
    </pre>
  </div>`;
  console.log(ev.clientX,ev.clientY);
  popup.style.left= (ev.clientX + 10) + 'px';
  popup.style.top = (ev.clientY + 10) + 'px';
}

document.querySelector('img').addEventListener('click',(e) => {document.querySelector('#popup').style.visibility = 'hidden'});
document.querySelector('#file').addEventListener('click',samples(seqs));
document.querySelector('#head').addEventListener('click',samples(msg));
</script>

<?php
	include('../../phpCrazy/footer.inc.php');
?>
